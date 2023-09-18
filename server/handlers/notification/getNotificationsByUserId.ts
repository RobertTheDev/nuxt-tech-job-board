import { Document, ObjectId } from 'mongodb';
import { notificationsCollection } from '../../lib/mongoDBCollections';
import logger from '../../lib/winstonLogger';

// This handler finds and returns notifications by their matching user id.

export default async function getNotificationsByUserId(
  userId: string,
): Promise<Document[]> {
  try {
    // Gets notifications by their shared user id.
    return await notificationsCollection
      .find({
        userId: new ObjectId(userId),
      })
      .toArray();
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error retrieving notifications by user id:', error);
    throw new Error(
      'Could not retrieve the notifications due to an error. Please try again.',
    );
  }
}
