import { DeleteResult, ObjectId } from 'mongodb';
import logger from '../../lib/winstonLogger';
import { savedJobPostsCollection } from '../../lib/mongoDBCollections';

// This handler deletes all saved job posts by their matching job post id.

export default function deleteSavedJobPostsByJobPostId(
  jobPostId: string,
): Promise<DeleteResult> {
  try {
    // Delete saved job posts by their job post id from the database.
    return savedJobPostsCollection.deleteMany({
      jobPostId: new ObjectId(jobPostId),
    });
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error deleting saved jobs post by job post id:', error);
    throw new Error(
      'Could not delete the saved job posts due to an error. Please try again.',
    );
  }
}
