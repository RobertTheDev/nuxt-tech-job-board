import { ObjectId } from 'mongodb';
import { candidatesCollection } from '../../lib/collections';

export default function getCandidatesByUserId(userId: string) {
  // Find candidates by user id.
  return candidatesCollection.find({
    userId: new ObjectId(userId),
  });
}
