import User from '@/models/user/types/User';
import logger from '@/server/lib/winstonLogger';
import { usersCollection } from '@/server/lib/mongoDBCollections';

export default async function getUserByPasswordResetToken(
  resetPasswordToken: string,
): Promise<User | null> {
  try {
    // Find a user by their matching reset password token.
    const findUser = (await usersCollection.findOne({
      resetPasswordToken,
    })) as User | null;

    // Return 404 if a user cannot be found by their matching reset password token.
    if (!findUser) {
      throw createError({
        statusCode: 404,
        statusMessage: `No user with reset token ${resetPasswordToken} was found.`,
      });
    }

    // Return 500 error if a user's password token has no expiry.
    if (!findUser.resetPasswordTokenExpiryTime) {
      throw createError({
        statusCode: 500,
        statusMessage: `No reset token expiry time was found.`,
      });
    }

    // Get the current time in milliseconds to compare the expiry time.
    const currentTimeInMS = new Date().getTime();

    // If user's password has expired then return a 500 error.
    if (findUser.resetPasswordTokenExpiryTime <= currentTimeInMS) {
      throw createError({
        statusCode: 500,
        statusMessage: `Your reset token has expired. Please request for a new reset token.`,
      });
    }

    return findUser;
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error retrieving user by password reset token:', error);
    // Rethrow the error to be handled elsewhere if needed
    throw error;
  }
}
