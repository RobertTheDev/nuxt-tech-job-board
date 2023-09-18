import { Document, ObjectId } from 'mongodb';
import { notificationsCollection } from '../../lib/mongoDBCollections';
import logger from '../../lib/winstonLogger';

// This handler finds and returns notifications by their matching company id.

export default async function getNotificationsByCompanyId(
  companyId: string,
): Promise<Document[]> {
  try {
    // Gets notifications by their shared company id.
    return await notificationsCollection
      .find({
        companyId: new ObjectId(companyId),
      })
      .toArray();
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error retrieving notifications by company id:', error);
    throw new Error(
      'Could not retrieve the notifications due to an error. Please try again.',
    );
  }
}
