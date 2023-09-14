import { candidatesCollection } from '../../lib/collections';

export default function getCandidates() {
  // Get all candidates from db.
  return candidatesCollection.find().toArray();
}
