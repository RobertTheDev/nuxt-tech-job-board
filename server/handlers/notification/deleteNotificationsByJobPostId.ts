import { DeleteResult, ObjectId } from 'mongodb';
import { notificationsCollection } from '../../lib/mongoDBCollections';
import logger from '../../lib/winstonLogger';

// This handler deletes notifications by their shared job post id.

export default async function deleteNotificationsByJobPostId(
  jobPostId: string,
): Promise<DeleteResult> {
  try {
    // Deletes all the app's notifications by their shared job post id from mongoDB.
    return await notificationsCollection.deleteMany({
      jobPostId: new ObjectId(jobPostId),
    });
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error deleting notifications by job post id:', error);
    throw new Error(
      'Could not delete the notifications due to an error. Please try again.',
    );
  }
}
