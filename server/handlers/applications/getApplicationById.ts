import { ObjectId } from 'mongodb';
import { applicationsCollection } from '../../lib/collections';

export default async function getApplicationById(id: string) {
  return await applicationsCollection.findOne({ _id: new ObjectId(id) });
}
