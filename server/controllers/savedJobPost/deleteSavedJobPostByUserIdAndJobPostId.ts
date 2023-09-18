import { DeleteResult, ObjectId } from 'mongodb';
import logger from '../../lib/winstonLogger';
import { savedJobPostsCollection } from '../../lib/mongoDBCollections';

// This handler finds and deletes a saved job post by its matching user id and job post id.

export default async function deleteSavedJobPostByUserIdAndJobPostId(
  userId: string,
  jobPostId: string,
): Promise<DeleteResult> {
  try {
    // Find and delete saved job post by its user ad job post id from the database.
    return await savedJobPostsCollection.deleteOne({
      userId: new ObjectId(userId),
      jobPostId: new ObjectId(jobPostId),
    });
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error(
      'Error deleting saved job post by user id and job post id:',
      error,
    );
    throw new Error(
      'Could not delete the saved job post due to an error. Please try again.',
    );
  }
}
