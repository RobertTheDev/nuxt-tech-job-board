import { ObjectId } from 'mongodb';
import { applicationsCollection } from '../../lib/collections';

export default function deleteApplicationById(id: string) {
  // Find and delete application by its id.
  return applicationsCollection.findOneAndDelete({
    _id: new ObjectId(id),
  });
}
