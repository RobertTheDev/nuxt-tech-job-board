import { notificationsCollection } from '../../lib/mongoDBCollections';

export default function getNotifications() {
  return notificationsCollection.find().toArray();
}
