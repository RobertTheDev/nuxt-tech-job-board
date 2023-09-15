import { notificationsCollection } from '../../lib/collections';

export default function getNotifications() {
  return notificationsCollection.find().toArray();
}
