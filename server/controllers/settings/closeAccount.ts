import { DeleteResult, ObjectId } from 'mongodb';
import { usersCollection } from '../../lib/mongoDBCollections';
import logger from '../../lib/winstonLogger';

// This handler closes the acount by finding and deleting a user by its id.

export default async function closeAccount(id: string): Promise<DeleteResult> {
  try {
    // Delete user by its id from the database.
    return await usersCollection.deleteOne({ _id: new ObjectId(id) });
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error(`Error closing the user' account:`, error);
    throw new Error(
      `Could not close the user's account due to an error. Please try again.`,
    );
  }
}
