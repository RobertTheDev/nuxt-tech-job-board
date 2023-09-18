import { Document } from 'mongodb';
import { notificationsCollection } from '../../lib/mongoDBCollections';
import logger from '../../lib/winstonLogger';

// This handler gets all notifications from MongoDB.

export default async function getNotifications(): Promise<Document[]> {
  try {
    // Returns all notifications from MongoDB.
    return await notificationsCollection.find().toArray();
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error getting notifications:', error);
    throw new Error(
      'Could not get the notifications due to an error. Please try again.',
    );
  }
}
