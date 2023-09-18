import { ObjectId } from 'mongodb';
import { usersCollection } from '../../../lib/mongoDBCollections';
import logger from '../../../lib/winstonLogger';
import User from '@/models/user/types/User';

// This handler gets a user's data with matching id.

export default async function getUserById(id: string): Promise<User | null> {
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
    return user as User;
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error retrieving user by id:', error);
    // Rethrow the error to be handled elsewhere if needed
    throw error;
  }
}
