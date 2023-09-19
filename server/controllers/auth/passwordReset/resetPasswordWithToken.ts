import { usersCollection } from '../../../lib/mongoDBCollections';
import { hashPassword } from '../../../helpers/auth/passwordManagement';
import logger from '../../../lib/winstonLogger';
import getUserByPasswordResetToken from './getUserByPasswordResetToken';
import resetPasswordSchema from '@/models/auth/validators/resetPasswordSchema';
import APIResponse from '@/models/config/api/Response';

// This handler resets a user's password using a password reset token.

export default async function resetPasswordWithToken(
  body: any,
  token: string,
): Promise<APIResponse> {
  try {
    // Validate the body.
    const validatedBody = await resetPasswordSchema.validate({
      password: body.password,
    });

    // Get the fields from the validated body.
    const { password } = validatedBody;

    // Check a user exists with their matching reset password token.
    await getUserByPasswordResetToken(token);

    // Hash the user's new password.
    const hashedPassword = await hashPassword(password);

    // Update the user by its id with the inputted body.
    await usersCollection.findOneAndUpdate(
      { resetPasswordToken: token },
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
