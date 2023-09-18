import { DeleteResult, ObjectId } from 'mongodb';
import logger from '../../../lib/winstonLogger';
import { savedJobPostsCollection } from '../../../lib/mongoDBCollections';

// This handler deletes all saved job posts by their matching user id.

export default function deleteSavedJobPostsByUserId(
  userId: string,
): Promise<DeleteResult> {
  try {
    // Delete saved job posts by their user id from the database.
    return savedJobPostsCollection.deleteMany({
      userId: new ObjectId(userId),
    });
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error deleting saved job posts by user id:', error);
    throw new Error(
      'Could not delete the saved job posts due to an error. Please try again.',
    );
  }
}
