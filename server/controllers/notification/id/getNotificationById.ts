import { Document, ObjectId, WithId } from 'mongodb';
import { notificationsCollection } from '../../../lib/mongoDBCollections';
import logger from '../../../lib/winstonLogger';

// This handler finds and returns a notification by its matching id.

export default async function getNotificationById(
  id: string,
): Promise<WithId<Document> | null> {
  try {
    // Get the notification by its id.
    return await notificationsCollection.findOne({
      _id: new ObjectId(id),
    });
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error retrieving notification by id:', error);
    throw new Error(
      'Could not retrieve the notification due to an error. Please try again.',
    );
  }
}
