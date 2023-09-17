import { ResetPasswordSchemaType } from '../../validators/auth/resetPasswordSchema';
import { usersCollection } from '../../lib/mongoDBCollections';
import { hashPassword } from '../../lib/passwordManagement';
import User from '@/models/user/types/User';

export default async function resetPassword(body: ResetPasswordSchemaType) {
  const { resetPasswordToken, password } = body;

  const findUser = (await usersCollection.findOne({
    resetPasswordToken,
  })) as User | null;

  if (!findUser) {
    throw createError({
      statusCode: 500,
      statusMessage: `No user with reset token ${resetPasswordToken} was found.`,
    });
  }

  if (!findUser.resetPasswordTokenExpiryTime) {
    throw createError({
      statusCode: 500,
      statusMessage: `No reset token expiry time was found.`,
    });
  }

  if (!findUser.resetPasswordToken) {
    throw createError({
      statusCode: 500,
      statusMessage: `No reset token was found.`,
    });
  }

  // Create an expiry time 10 minutes from now.
  const currentTimeInMS = new Date().getTime();

  if (findUser.resetPasswordTokenExpiryTime >= currentTimeInMS) {
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

    return {
      statusCode: 200,
      statusMessage: `Your password was successfully reset. You can now login again with your new password.`,
    };
  } else {
    throw createError({
      statusCode: 500,
      statusMessage: `Your reset token has expired. Please request for a new reset token.`,
    });
  }
}
