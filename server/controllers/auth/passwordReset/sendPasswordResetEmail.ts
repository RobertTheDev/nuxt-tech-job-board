import sgMail from '@sendgrid/mail';
import logger from '@/server/lib/winstonLogger';

// This helper sends the user a password reset email using the SendGrid API.

export default async function sendPasswordResetEmail(
  emailAddress: string,
  resetPasswordToken: string,
) {
  try {
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
        <p>The button below will take you to our TechBoard password reset page with instructions to reset your password.</p>
        <p>Please note that this password reset email will expire after 10 minutes. After expiry you will need to request for another password reset.</p>
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
    return await sgMail.send(passwordResetEmailTemplate);
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error(`Error trying to send password reset email: `, error);

    // Rethrow the error to be handled elsewhere if needed
    throw error;
  }
}
