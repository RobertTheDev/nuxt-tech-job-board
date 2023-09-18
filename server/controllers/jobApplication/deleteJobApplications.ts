import { DeleteResult } from 'mongodb';
import logger from '../../lib/winstonLogger';
import { jobApplicationsCollection } from '../../lib/mongoDBCollections';

// This handler deletes all the app's job applications from mongoDB.

export default async function deleteJobApplications(): Promise<DeleteResult> {
  try {
    // Deletes all the app's company owners from mongoDB.
    return await jobApplicationsCollection.deleteMany();
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error deleting job applications:', error);
    throw new Error(
      'Could not delete the job applications due to an error. Please try again.',
    );
  }
}
