import { candidatesCollection } from '../../lib/collections';

export default function deleteCandidates() {
  // Delete all candidates.
  return candidatesCollection.deleteMany();
}
