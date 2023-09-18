import { DeleteResult } from 'mongodb';
import { usersCollection } from '../../../lib/mongoDBCollections';
import logger from '../../../lib/winstonLogger';

// This handler finds and deletes a user by their email address.

export default async function deleteUserByEmailAddress(
  emailAddress: string,
): Promise<DeleteResult> {
  try {
    // Delete user by its id from the database.
    return await usersCollection.deleteOne({ emailAddress });
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error deleting user by email address:', error);
    // Rethrow the error to be handled elsewhere if needed
    throw error;
  }
}
