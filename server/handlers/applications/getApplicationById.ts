import { ObjectId } from 'mongodb';
import { applicationsCollection } from '../../lib/collections';

export default async function getApplicationById(id: string) {
  // Find and return the application by its id.
  return await applicationsCollection.findOne({ _id: new ObjectId(id) });
}
