import { Document, ObjectId } from 'mongodb';
import { notificationsCollection } from '../../../lib/mongoDBCollections';
import logger from '../../../lib/winstonLogger';

// This handler finds and returns notifications by their matching job post id.

export default async function getNotificationsByJobPostId(
  jobPostId: string,
): Promise<Document[]> {
  try {
    // Gets notifications by their shared job post id.
    return await notificationsCollection
      .find({
        jobPostId: new ObjectId(jobPostId),
      })
      .toArray();
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error retrieving notifications by job post id:', error);
    throw new Error(
      'Could not retrieve the notifications due to an error. Please try again.',
    );
  }
}
