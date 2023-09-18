import { ObjectId, Document } from 'mongodb';
import logger from '../../lib/winstonLogger';
import { savedJobPostsCollection } from '../../lib/mongoDBCollections';

// This handler finds and returns a saved job post by its matching user id and job post id.

export default async function getSavedJobPostByUserIdAndJobPostId(
  userId: string,
  jobPostId: string,
): Promise<Document | null> {
  try {
    // Find and retrun the saved job post by user id and job post id.
    return await savedJobPostsCollection.findOne({
      userId: new ObjectId(userId),
      jobPostId: new ObjectId(jobPostId),
    });
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error(
      'Error retrieving saved job post by user id and job post id:',
      error,
    );
    throw new Error(
      'Could not retireve the saved job post due to an error. Please try again.',
    );
  }
}
