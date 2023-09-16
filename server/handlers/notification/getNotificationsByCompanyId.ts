import { ObjectId } from 'mongodb';
import { notificationsCollection } from '../../lib/mongoDBCollections';

export default function getNotificationsByCompanyId(companyId: string) {
  return notificationsCollection
    .find({
      companyId: new ObjectId(companyId),
    })
    .toArray();
}
