import { usersCollection } from '../../../lib/mongoDBCollections';
import { hashPassword } from '../../../lib/passwordManagement';
import logger from '../../../lib/winstonLogger';
import resetPasswordSchema from '@/models/auth/validators/resetPasswordSchema';
import User from '@/models/user/types/User';

// This handler resets a user's password.

export default async function resetPassword(body: any) {
  try {
    // Validate the body.
    const validatedBody = await resetPasswordSchema.validate(body);

    // Get the fields from the validated body.
    const { resetPasswordToken, password } = validatedBody;

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

    // Create an expiry time 10 minutes from now.
    const currentTimeInMS = new Date().getTime();

    // If user's password has expired then return a 500 error.
    if (findUser.resetPasswordTokenExpiryTime <= currentTimeInMS) {
      throw createError({
        statusCode: 500,
        statusMessage: `Your reset token has expired. Please request for a new reset token.`,
      });
    }

    // Hash the user's new password.
    const hashedPassword = await hashPassword(password);
    // Update the user by its id with the inputted body.
    await usersCollection.findOneAndUpdate(
      { resetPasswordToken },
      {
        $set: {
          password: hashedPassword,
          resetPasswordToken: null,
          resetPasswordTokenExpiryTime: null,
        },
      },
    );

    // Return a 200 with a success message if password was reset.
    return {
      statusCode: 200,
      statusMessage: `Your password was successfully reset. You can now login again with your new password.`,
    };
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error(`Error trying to reset the user's password:`, error);
    // Rethrow the error to be handled elsewhere if needed
    throw error;
  }
}
