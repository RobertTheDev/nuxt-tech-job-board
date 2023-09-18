import { ObjectId } from 'mongodb';
import { notificationsCollection } from '../../../lib/mongoDBCollections';
import logger from '../../../lib/winstonLogger';

// This handler finds and returns all notifications by their matching user id.
// The habdler returns no related fields.

export default async function getNotificationsByUserIdWithoutRelatedFields(
  userId: string,
) {
  try {
    // Return the notificiations by user id.
    return await notificationsCollection
      .find({ userId: new ObjectId(userId) })
      .toArray();
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error retrieving notifications by user id:', error);
    throw new Error(
      'Could not retrieve the notifications due to an error. Please try again.',
    );
  }
}
