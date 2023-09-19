import { Document, ObjectId, WithId } from 'mongodb';
import logger from '../../../lib/winstonLogger';
import { notificationsCollection } from '../../../lib/mongoDBCollections';
import getNotificationById from './getNotificationById';
import updateNotificationSchema from '@/models/notification/validators/updateNotificationSchema';

// This handler updates a notification by its id from MongoDB.

export default async function updateNotificationById(
  id: string,
  body: any,
): Promise<WithId<Document> | null> {
  try {
    // Validate the body.
    const validatedBody = await updateNotificationSchema.validate(body);

    // Updated the notification by its id with the inputted body.
    await notificationsCollection.findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: validatedBody },
    );

    // Return updated notification by its id.
    return await getNotificationById(id);
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error updating notification by id:', error);
    throw new Error(
      'Could not update the notification due to an error. Please try again.',
    );
  }
}
