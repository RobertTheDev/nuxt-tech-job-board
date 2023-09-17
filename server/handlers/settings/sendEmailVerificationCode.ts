import crypto from 'node:crypto';
import sgMail from '@sendgrid/mail';
import { usersCollection } from '../../lib/mongoDBCollections';
import { SendEmailVerificationTokenSchemaType } from '../../validators/settings/sendEmailVerificationTokenSchema';

export default async function sendEmailVerificationCode(
  body: SendEmailVerificationTokenSchemaType,
) {
  const { emailAddress } = body;

  // Create an expiry time 10 minutes from now.
  const currentTimeInMS = new Date().getTime();
  const emailVerificationTokenExpiryTime = new Date(
    currentTimeInMS + 10 * 60 * 1000,
  ).getTime();

  const emailVerificationToken = crypto.randomUUID();

  sgMail.setApiKey(String(process.env.SENDGRID_API_KEY));
  const msg = {
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

  await sgMail.send(msg);

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

  return {
    statusCode: 200,
    statusMessage: `A verification email has been succesfully sent to ${emailAddress}.`,
  };
}
