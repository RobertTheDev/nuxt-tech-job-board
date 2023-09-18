import { usersCollection } from '../../lib/mongoDBCollections';
import logger from '../../lib/winstonLogger';
import User from '@/models/user/types/User';

// This handler gets all users from MongoDB.

export default async function getUsers(): Promise<User[]> {
  try {
    // Find and returns all users from MongoDB and removes password field from the database.
    return (await usersCollection
      .find()
      .project({ password: 0 })
      .toArray()) as User[];
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error getting users:', error);
    // Rethrow the error to be handled elsewhere if needed
    throw error;
  }
}
