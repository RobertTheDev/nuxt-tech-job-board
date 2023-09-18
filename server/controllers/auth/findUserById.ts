import { ObjectId } from 'mongodb';
import { usersCollection } from '../../lib/mongoDBCollections';
import logger from '../../lib/winstonLogger';

// This handler finds a user by their id.

export default async function findUserById(id: string) {
  try {
    // Find a user by their id in the database and removes their password field.
    const findUser = await usersCollection
      .find({
        _id: new ObjectId(id),
      })
      .project({ password: 0 })
      .toArray();

    // Get the user item from the array/
    const user = findUser[0];

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
    logger.error(`Error finding user by id:`, error);
    throw new Error(
      `Could not find user by their id due to an error. Please try again.`,
    );
  }
}
