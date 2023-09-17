import { DeleteResult } from 'mongodb';
import logger from '../../lib/winstonLogger';
import { savedJobPostsCollection } from '../../lib/mongoDBCollections';

// This handler deletes all the app's saved job posts from mongoDB.

export default async function deleteSavedJobPosts(): Promise<DeleteResult> {
  try {
    // Deletes all the app's saved job posts from mongoDB.
    return await savedJobPostsCollection.deleteMany();
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error deleting saved job posts:', error);
    throw new Error(
      'Could not delete the saved job posts due to an error. Please try again.',
    );
  }
}
