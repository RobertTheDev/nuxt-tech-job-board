import { ObjectId } from 'mongodb';
import { applicationsCollection } from '../../lib/collections';

export default function getApplicationsByUserId(userId: string) {
  // Find applications by user id.
  return applicationsCollection.find({
    userId: new ObjectId(userId),
  });
}
