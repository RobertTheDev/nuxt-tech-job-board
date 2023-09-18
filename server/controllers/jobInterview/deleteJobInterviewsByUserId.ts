import { ObjectId } from 'mongodb';
import { jobInterviewsCollection } from '../../lib/mongoDBCollections';
import logger from '../../lib/winstonLogger';

export default function deleteJobInterviewsByUserId(userId: string) {
  try {
    // Find and delete all jon interviews by their user id.
    return jobInterviewsCollection.deleteMany({
      userId: new ObjectId(userId),
    });
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error deletings job interviews by user id:', error);
    throw new Error(
      'Could not delete the job interviews due to an error. Please try again.',
    );
  }
}
