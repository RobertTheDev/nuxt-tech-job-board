import { usersCollection } from '../../lib/mongoDBCollections';
import User from '@/models/user/types/User';

export default async function resetPassword({
  password,
  resetPasswordToken,
}: {
  password: string;
  resetPasswordToken: string;
}) {
  const findUser = (await usersCollection.findOne({
    resetPasswordToken,
  })) as User | null;

  if (!findUser) {
    return `No user with reset token ${resetPasswordToken} was found.`;
  }

  if (!findUser.resetPasswordTokenExpiryTime) {
    return 'No reset token expiry time was found.';
  }

  if (!findUser.resetPasswordToken) {
    return 'No reset token was found.';
  }

  // Create an expiry time 10 minutes from now.
  const currentTimeInMS = new Date().getTime();

  if (findUser.resetPasswordTokenExpiryTime >= currentTimeInMS) {
    // Update the user by its id with the inputted body.
    await usersCollection.findOneAndUpdate(
      { resetPasswordToken },
      {
        $set: {
          password,
        },
      },
    );
  } else {
    return 'Your reset token has expired. Please request for a new reset token.';
  }
}
