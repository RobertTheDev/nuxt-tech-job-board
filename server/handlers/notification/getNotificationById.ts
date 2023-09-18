import { ObjectId } from 'mongodb';
import { notificationsCollection } from '../../lib/mongoDBCollections';

// This handler finds and returns a notification by its matching id.

export default async function getNotificationById(id: string) {
  // Get the notification by its id.
  return await notificationsCollection.findOne({
    _id: new ObjectId(id),
  });
}
