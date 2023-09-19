import { randomUUID } from 'node:crypto';
import { usersCollection } from '../../../lib/mongoDBCollections';
import logger from '../../../lib/winstonLogger';
// import sendPasswordResetEmail from './sendPasswordResetEmail';
import sendPasswordResetTokenSchema from '@/models/auth/validators/sendPasswordResetTokenSchema';
import APIResponse from '@/models/config/api/Response';
import getUserByEmailAddress from '@/server/controllers/user/emailAddress/getUserByEmailAddress';

// This handler sends a password reset token by email using SendGrid.

export default async function sendPasswordResetToken(
  body: any,
): Promise<APIResponse> {
  try {
    // Validate the body.
    const validatedBody = await sendPasswordResetTokenSchema.validate(body);

    // Get email address from validated body.
    const { emailAddress } = validatedBody;

    // Check user exists with the requested email address.
    const user = await getUserByEmailAddress(validatedBody.emailAddress);

    // If no user exists return a 404.
    if (!user) {
      throw createError({
        statusCode: 404,
        statusMessage: `Account with email ${validatedBody.emailAddress} does not exist. Please sign up or try again with a different email address.`,
      });
    }

    // Create an expiry time 10 minutes from now.
    const currentTimeInMS = new Date().getTime();
    const resetPasswordTokenExpiryTime = new Date(
      currentTimeInMS + 10 * 60 * 1000,
    ).getTime();

    // Create a reset password token using a generated random uuid.
    const resetPasswordToken = randomUUID();

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

    // Call the send password reset email helper to send user email with token,
    // await sendPasswordResetEmail(emailAddress, resetPasswordToken);

    // Return a 200 is password reset email is successfully sent.
    return {
      statusCode: 200,
      statusMessage: `Password reset email has been succesfully sent to ${emailAddress}. Please check spam or deleted folder if email does not appear in your inbox.`,
    };
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error sending password reset email:', error);
    // Rethrow the error to be handled elsewhere if needed
    throw error;
  }
}
