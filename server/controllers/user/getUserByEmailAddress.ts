import { usersCollection } from '../../lib/mongoDBCollections';
import logger from '../../lib/winstonLogger';

export default async function getUserByEmailAddress(emailAddress: string) {
  try {
    // Find the user from the database by its email address.
    const userWithoutPassword = await usersCollection
      .find({ emailAddress })
      .project({ password: 0 })
      .toArray();

    // Return the user from the array.
    const user = userWithoutPassword[0];

    // If no user is found throw a 404 error.
    if (!user) {
      throw createError({
        statusCode: 404,
        statusMessage: `No user was found with email address ${emailAddress}`,
      });
    }

    // Return the user.
    return user;
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error retrieving user by email address:', error);
    throw Error;
  }
}
