import { DeleteResult } from 'mongodb';
import logger from '../../lib/winstonLogger';
import { jobInterviewsCollection } from '../../lib/mongoDBCollections';

// This handler deletes all the app's job applications from mongoDB.

export default async function deleteJobInterviews(): Promise<DeleteResult> {
  try {
    // Deletes all the app's job interviews from mongoDB.
    return await jobInterviewsCollection.deleteMany();
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error deleting job interviews:', error);
    throw new Error(
      'Could not delete the job interviews due to an error. Please try again.',
    );
  }
}
