import { DeleteResult } from 'mongodb';
import logger from '../../lib/winstonLogger';
import { notificationsCollection } from 'server/lib/mongoDBCollections';

// This handler deletes all the app's notifications from mongoDB.

export default async function deleteNotifications(): Promise<DeleteResult> {
  try {
    // Deletes all the app's notifications from mongoDB.
    return await notificationsCollection.deleteMany();
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error deleting notifications:', error);
    throw new Error(
      'Could not delete the notifications due to an error. Please try again.',
    );
  }
}
