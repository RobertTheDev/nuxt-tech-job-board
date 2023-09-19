import { Document, WithId } from 'mongodb';
import logger from '../../lib/winstonLogger';
import { notificationsCollection } from '../../lib/mongoDBCollections';
import getNotificationById from './id/getNotificationById';
import createNotificationSchema from '@/models/notification/validators/createNotificationSchema';

// This handler creates and inserts a new notification into MongoDB.

export default async function createNotification(
  body: any,
): Promise<WithId<Document> | null> {
  try {
    // Validate the body.
    const validatedBody = await createNotificationSchema.validate(body);

    // Create and return the notification
    const createdNotification = await notificationsCollection.insertOne(
      validatedBody,
    );

    // Return created notification by its id.
    return await getNotificationById(createdNotification.insertedId.toString());
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error creating notification:', error);
    throw new Error(
      'Could not create the notification due to an error. Please try again.',
    );
  }
}
