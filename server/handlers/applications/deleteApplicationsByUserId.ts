import { ObjectId } from 'mongodb';
import { applicationsCollection } from '../../lib/collections';

export default function deleteApplicationsByUserId(userId: string) {
  // Find and delete all applications by their user id.
  return applicationsCollection.deleteMany({
    userId: new ObjectId(userId),
  });
}
