import { randomUUID } from 'node:crypto';
import sgMail from '@sendgrid/mail';
import { usersCollection } from '../../lib/mongoDBCollections';
import sendPasswordResetTokenSchema from '../../validators/auth/sendPasswordResetTokenSchema';
import logger from '../../lib/winstonLogger';
import APIResponse from '@/models/config/api/Response';

// This handler sends a password reset token by email using SendGrid.

export default async function sendPasswordResetToken(
  body: any,
): Promise<APIResponse> {
  try {
    // Validate the body.
    const validatedBody = await sendPasswordResetTokenSchema.validate(body);

    // Get email address from validated body.
    const { emailAddress } = validatedBody;

    // Create an expiry time 10 minutes from now.
    const currentTimeInMS = new Date().getTime();
    const resetPasswordTokenExpiryTime = new Date(
      currentTimeInMS + 10 * 60 * 1000,
    ).getTime();

    // Create a reset password token using a generated random uuid.
    const resetPasswordToken = randomUUID();

    // Set the sendgrid api key.
    sgMail.setApiKey(String(process.env.SENDGRID_API_KEY));

    // The password reset email template content.
    const passwordResetEmailTemplate = {
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

    // Send the password reset email.
    await sgMail.send(passwordResetEmailTemplate);

    // Update the user with the reset password token to retrieve it.
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

    // Return a 200 is password reset email is successfully sent.
    return {
      statusCode: 200,
      statusMessage: `Password reset email has been succesfully sent to ${emailAddress}.`,
    };
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error sending password reset email:', error);
    // Rethrow the error to be handled elsewhere if needed
    throw error;
  }
}
