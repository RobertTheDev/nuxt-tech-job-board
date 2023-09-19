import { Document } from 'mongodb';
import verifyEmailSchema from '../../validators/settings/emailVerification/verifyEmailSchema';
import { usersCollection } from '../../lib/mongoDBCollections';
import logger from '../../lib/winstonLogger';
import User from '@/models/user/types/User';

// This handler verifies the user's email.

export default async function verifyEmailAddress(body: any): Promise<Document> {
  try {
    // Validate the body.
    const validatedBody = await verifyEmailSchema.validate(body);

    // Get the email verification token from validated body.
    const { emailVerificationToken } = validatedBody;

    // Get the user with the matching token,
    const findUser = (await usersCollection.findOne({
      emailVerificationToken,
    })) as User | null;

    // Throw an error if user with token is not found.
    if (!findUser) {
      throw createError({
        statusCode: 404,
        statusMessage: `No user with email verification token ${emailVerificationToken} was found.`,
      });
    }

    // Throw an error if user's token has no expiry.
    if (!findUser.emailVerificationTokenExpiryTime) {
      throw createError({
        statusCode: 500,
        statusMessage: `No email verification token expiry time was found.`,
      });
    }

    // Throw an error if user has no token.
    if (!findUser.emailVerificationToken) {
      throw createError({
        statusCode: 500,
        statusMessage: `No reset token was found.`,
      });
    }

    // Create an expiry time 10 minutes from now.
    const currentTimeInMS = new Date().getTime();

    // Throw an error if user's verification token has expired.
    if (findUser.emailVerificationTokenExpiryTime >= currentTimeInMS) {
      throw createError({
        statusCode: 500,
        statusMessage: `Your email verification token has expired. Please request for a new email verification token.`,
      });
    }

    // Verify the user's email and remove the token.
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

    // Return a 200 message after successful email verification.
    return {
      statusCode: 200,
      statusMessage: `Your email has been successfully verified.`,
    };
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error retrieving user by id:', error);
    throw new Error(
      'Could not retrieve the user due to an error. Please try again.',
    );
  }
}
