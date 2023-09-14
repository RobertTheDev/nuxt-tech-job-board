import { ObjectId } from 'mongodb';
import { candidatesCollection } from '../../lib/collections';

export default async function getCandidateById(id: string) {
  // Find and return the candidate by its id.
  return await candidatesCollection.findOne({ _id: new ObjectId(id) });
}
