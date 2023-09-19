import crypto from 'node:crypto';
import sgMail from '@sendgrid/mail';
import { Document } from 'mongodb';
import { usersCollection } from '../../lib/mongoDBCollections';
import logger from '../../lib/winstonLogger';
import sendEmailVerificationTokenSchema from '@/models/settings/validators/emailVerification/sendEmailVerificationTokenSchema';

// This handler sends an email verification token to the user's email using SendGrid.
// This handler updates the user in MongoDB to have the token to retieve it.

export default async function sendVerificationEmail(
  body: any,
): Promise<Document> {
  try {
    // Validate the body.
    const validatedBody = await sendEmailVerificationTokenSchema.validate(body);

    // Get email address from validated body.
    const { emailAddress } = validatedBody;

    // Create an expiry time 10 minutes from now.
    const currentTimeInMS = new Date().getTime();
    const emailVerificationTokenExpiryTime = new Date(
      currentTimeInMS + 10 * 60 * 1000,
    ).getTime();

    // Create a random UUID to use as a token.
    const emailVerificationToken = crypto.randomUUID();

    // Sets the sendgrid api key.
    sgMail.setApiKey(String(process.env.SENDGRID_API_KEY));

    // The verification email template.
    const verificationEmailTemplate = {
      to: emailAddress,
      from: 'robertthedev@gmail.com',
      subject: 'TechBoard Email Verification',
      html: `
    <div>
      <h1>Email Verification</h1>
      <p>The button below will take you to our TechBoard email verification page which will verify your email address.
      </p>
      <p>Click the button below to verify your email address.</p>
      <a
        target="_blank"
        href="http://localhost:3000/settings/verify-email/${emailVerificationToken}"
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
        Verify Email
      </a>
    </div>
    `,
    };

    // Sends the verification email.
    await sgMail.send(verificationEmailTemplate);

    // Updates the user to have the created verification token.
    await usersCollection.findOneAndUpdate(
      {
        emailAddress,
      },
      {
        $set: {
          emailVerificationToken,
          emailVerificationTokenExpiryTime,
        },
      },
    );

    // Return a 200 message if emai, successfully sent.
    return {
      statusCode: 200,
      statusMessage: `A verification email has been succesfully sent to ${emailAddress}.`,
    };
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error sending the verification email:', error);
    throw new Error(
      'Could not send the verification email due to an error. Please try again.',
    );
  }
}
