import logger from '../../lib/winstonLogger';
import { usersCollection } from '../../lib/mongoDBCollections';

// This handler finds a user by their email address.

export default async function findUserByEmailAddress(emailAddress: string) {
  try {
    // Find user in the database by its email address.
    const user = await usersCollection.findOne({
      emailAddress,
    });

    // Return 404 if no user exists in the database.
    if (!user) {
      throw createError({
        statusCode: 404,
        statusMessage: 'No user was found in the database.',
      });
    }

    // Return the user.
    return user;
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error(`Error finding user by email address:`, error);
    throw new Error(
      `Could not find user by their email address due to an error. Please try again.`,
    );
  }
}
