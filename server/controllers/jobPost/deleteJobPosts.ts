import { DeleteResult } from 'mongodb';
import logger from '../../lib/winstonLogger';
import { jobPostsCollection } from '../../lib/mongoDBCollections';

// This handler deletes all the app's job posts from mongoDB.

export default async function deleteJobPosts(): Promise<DeleteResult> {
  try {
    // Deletes all the app's job posts from mongoDB.
    return await jobPostsCollection.deleteMany();
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error deleting job posts:', error);
    throw new Error(
      'Could not delete the job posts due to an error. Please try again.',
    );
  }
}
