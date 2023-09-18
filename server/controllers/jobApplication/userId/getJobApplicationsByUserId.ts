import { ObjectId } from 'mongodb';
import { jobApplicationsCollection } from '../../../lib/mongoDBCollections';
import logger from '../../../lib/winstonLogger';

// This handler retrieves the job applications by their matching user id.

export default function getJobApplicationsByUserId(userId: string) {
  try {
    // Find job applications by user id.
    return jobApplicationsCollection.find({
      userId: new ObjectId(userId),
    });
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error retrieving job applications by user id:', error);
    throw new Error(
      'Could not retrieve the job applications due to an error. Please try again.',
    );
  }
}
