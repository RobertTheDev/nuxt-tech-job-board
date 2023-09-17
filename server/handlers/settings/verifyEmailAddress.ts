import { VerifyEmailSchemaType } from '../../validators/settings/verifyEmailSchema';
import { usersCollection } from '../../lib/mongoDBCollections';
import User from '@/models/user/types/User';

export default async function verifyEmailAddress(body: VerifyEmailSchemaType) {
  const { emailVerificationToken } = body;

  const findUser = (await usersCollection.findOne({
    emailVerificationToken,
  })) as User | null;

  if (!findUser) {
    throw createError({
      statusCode: 500,
      statusMessage: `No user with email verification token ${emailVerificationToken} was found.`,
    });
  }

  if (findUser.emailVerified) {
    throw createError({
      statusCode: 500,
      statusMessage: `Your email has already been verified.`,
    });
  }

  if (!findUser.emailVerificationTokenExpiryTime) {
    throw createError({
      statusCode: 500,
      statusMessage: `No email verification token expiry time was found.`,
    });
  }

  if (!findUser.emailVerificationToken) {
    throw createError({
      statusCode: 500,
      statusMessage: `No reset token was found.`,
    });
  }

  // Create an expiry time 10 minutes from now.
  const currentTimeInMS = new Date().getTime();

  if (findUser.emailVerificationTokenExpiryTime >= currentTimeInMS) {
    // Update the user by its id with the inputted body.
    await usersCollection.findOneAndUpdate(
      { emailVerificationToken },
      {
        $set: {
          emailVerified: new Date(),
          emailVerificationToken: null,
          emailVerificationTokenExpiryTime: null,
        },
      },
    );

    return {
      statusCode: 200,
      statusMessage: `Your email has been successfully verified.`,
    };
  } else {
    throw createError({
      statusCode: 500,
      statusMessage: `Your email verification token has expired. Please request for a new email verification token.`,
    });
  }
}
