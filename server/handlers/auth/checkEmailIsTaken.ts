import logger from '../../lib/winstonLogger';
import { usersCollection } from '../../lib/mongoDBCollections';

// This handler checks if user's email is already in use and returns an error if it is.

export default async function checkEmailIsTaken(emailAddress: string) {
  try {
    // Check email is not already in use in the database.
    const checkEmailInUse = await usersCollection.findOne({
      emailAddress,
    });

    // Return 400 error if email is already in use.
    if (checkEmailInUse) {
      throw createError({
        statusCode: 400,
        statusMessage:
          'A user with that email address already exists. Please try again with a different email address.',
      });
    }
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error checking if user email has been taken:', error);
    throw new Error(
      `Could not check the user's email due to an error. Please try again.`,
    );
  }
}
