import { DeleteResult } from 'mongodb';
import logger from '../../lib/winstonLogger';
import { usersCollection } from '../../lib/mongoDBCollections';

// This handler deletes all the app's users from mongoDB.

export default async function deleteUsers(): Promise<DeleteResult> {
  try {
    // Deletes all the app's users from mongoDB.
    return await usersCollection.deleteMany();
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error deleting users:', error);
    throw new Error(
      'Could not delete the users due to an error. Please try again.',
    );
  }
}
