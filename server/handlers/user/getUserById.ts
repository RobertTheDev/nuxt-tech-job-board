import { ObjectId, Document } from 'mongodb';
import { usersCollection } from '../../lib/mongoDBCollections';
import logger from '../../lib/winstonLogger';

export default async function getUserById(id: string): Promise<Document> {
  try {
    // Find the user from the database by its id and remove the password field.
    const userWithoutPassword = await usersCollection
      .find({ _id: new ObjectId(id) })
      .project({ password: 0 })
      .toArray();

    // Return the user from the array.
    const user = userWithoutPassword[0];

    // If no user is found throw a 404 error.
    if (!user) {
      throw createError({
        statusCode: 404,
        statusMessage: `No user was found with id ${id}`,
      });
    }

    // Return the user.
    return user;
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error retrieving user by id:', error);
    throw new Error(
      'Could not retrieve the user due to an error. Please try again.',
    );
  }
}
