import { DeleteResult, ObjectId } from 'mongodb';
import logger from '../../../lib/winstonLogger';
import { notificationsCollection } from '../../../lib/mongoDBCollections';

// This handler deletes a notification from MongoDB by its id.

export default async function deleteNotificationById(
  id: string,
): Promise<DeleteResult> {
  try {
    // Delete the notification from MongoDB by its id.
    return await notificationsCollection.deleteOne({ _id: new ObjectId(id) });
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error deleting notification by id:', error);
    throw new Error(
      'Could not delete the notification due to an error. Please try again.',
    );
  }
}
