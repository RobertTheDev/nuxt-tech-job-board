import { Document } from 'mongodb';
import { usersCollection } from '../../lib/mongoDBCollections';
import logger from '../../lib/winstonLogger';

// This handler gets all users from MongoDB.

export default async function getUsers(): Promise<Document[]> {
  try {
    // Find and returns all users from MongoDB and removes password field from the database.
    return await usersCollection.find().project({ password: 0 }).toArray();
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error getting users:', error);
    throw new Error(
      'Could not get the users due to an error. Please try again.',
    );
  }
}
