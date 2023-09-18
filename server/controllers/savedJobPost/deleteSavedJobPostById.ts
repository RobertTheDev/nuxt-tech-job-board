import { DeleteResult, ObjectId } from 'mongodb';
import { savedJobPostsCollection } from '../../lib/mongoDBCollections';
import logger from '../../lib/winstonLogger';

// This handler finds and deletes a saved job post by its id.

export default async function deleteSavedJobPostById(
  id: string,
): Promise<DeleteResult> {
  try {
    // Find and delete the saved job post by its id.
    return await savedJobPostsCollection.deleteOne({ _id: new ObjectId(id) });
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error deleting saved job post by id:', error);
    throw new Error(
      'Could not delete the saved job post due to an error. Please try again.',
    );
  }
}
