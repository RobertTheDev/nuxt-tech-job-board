import { DeleteResult, ObjectId } from 'mongodb';
import { notificationsCollection } from '../../lib/mongoDBCollections';
import logger from '../../lib/winstonLogger';

// This handler deletes notifications by their shared user id.

export default async function deleteNotificationsByUserId(
  userId: string,
): Promise<DeleteResult> {
  try {
    // Deletes all the app's notifications by their shared user id from mongoDB.
    return await notificationsCollection.deleteMany({
      userId: new ObjectId(userId),
    });
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error deleting notifications by user id:', error);
    throw new Error(
      'Could not delete the notifications due to an error. Please try again.',
    );
  }
}
