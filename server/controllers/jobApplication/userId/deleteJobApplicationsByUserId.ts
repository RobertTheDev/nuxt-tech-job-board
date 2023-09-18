import { ObjectId } from 'mongodb';
import { jobApplicationsCollection } from '../../../lib/mongoDBCollections';
import logger from '../../../lib/winstonLogger';

// This handler deletes job applications by their matching user id.

export default function deleteJobApplicationsByUserId(userId: string) {
  try {
    // Find and delete all job applications by their user id.
    return jobApplicationsCollection.deleteMany({
      userId: new ObjectId(userId),
    });
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error deleting job applications by user id:', error);
    throw new Error(
      'Could not delete the job applications due to an error. Please try again.',
    );
  }
}
