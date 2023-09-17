import { randomUUID } from 'node:crypto';
import sgMail from '@sendgrid/mail';
import { usersCollection } from '../../lib/mongoDBCollections';
import { SendPasswordResetTokenSchemaType } from '../../validators/auth/sendPasswordResetTokenSchema';
import logger from '../../lib/winstonLogger';
import APIResponse from '@/models/config/api/Response';

export default async function sendPasswordResetToken(
  validatedBody: SendPasswordResetTokenSchemaType,
): Promise<APIResponse> {
  try {
    const { emailAddress } = validatedBody;

    // Create an expiry time 10 minutes from now.
    const currentTimeInMS = new Date().getTime();
    const resetPasswordTokenExpiryTime = new Date(
      currentTimeInMS + 10 * 60 * 1000,
    ).getTime();

    const resetPasswordToken = randomUUID();

    sgMail.setApiKey(String(process.env.SENDGRID_API_KEY));
    const msg = {
      to: emailAddress,
      from: 'robertthedev@gmail.com',
      subject: 'TechBoard Reset Password',
      html: `
    <div>
      <h1>Forgotten your password?</h1>
      <p>The button below will take you to our TechBoard password reset page with instructions to reset your password.
      </p>
      <p>Click the button below to get started.</p>
      <a
        target="_blank"
        href="http://localhost:3000/auth/reset-password/${resetPasswordToken}"
        style="
          background-color: #0075ff;
          border: none;
          border-radius: 4px;
          color: white;
          cursor: pointer;
          font-family: Poppins, sans-serif;
          font-size: 14px;
          font-weight: 500;
          margin-top: 8px;
          padding: 8px 16px;
          text-decoration: none;
        "
      >
        Reset Password
      </a>
    </div>
    `,
    };

    await sgMail.send(msg);

    await usersCollection.findOneAndUpdate(
      {
        emailAddress,
      },
      {
        $set: {
          resetPasswordToken,
          resetPasswordTokenExpiryTime,
        },
      },
    );

    return {
      statusCode: 200,
      statusMessage: `Password reset email has been succesfully sent to ${emailAddress}.`,
    };
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error inserting user:', error);
    throw new Error(
      'Sign up could not be completed due to an error. Please try again.',
    );
  }
}
