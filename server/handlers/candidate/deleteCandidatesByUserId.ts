import { ObjectId } from 'mongodb';
import { candidatesCollection } from '../../lib/collections';

export default function deleteCandidatesByUserId(userId: string) {
  // Find and delete all candidates by their user id.
  return candidatesCollection.deleteMany({
    userId: new ObjectId(userId),
  });
}
