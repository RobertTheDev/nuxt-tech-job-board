import { ObjectId, DeleteResult } from 'mongodb';
import { jobPostsCollection } from '../../lib/mongoDBCollections';
import logger from '../../lib/winstonLogger';

// This handler finds and deletes a job interview by its id.

export default async function deleteJobInterviewById(
  id: string,
): Promise<DeleteResult> {
  try {
    // Find and delete the job post by its id.
    return await jobPostsCollection.deleteOne({ _id: new ObjectId(id) });
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error deleting job interview by id:', error);
    throw new Error(
      'Could not delete the job interview due to an error. Please try again.',
    );
  }
}
