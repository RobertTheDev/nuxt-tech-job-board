import { ObjectId } from 'mongodb';
import { candidatesCollection } from '../../lib/collections';

export default function deleteCandidateById(id: string) {
  // Delete candidate by its id.
  return candidatesCollection.findOneAndDelete({
    _id: new ObjectId(id),
  });
}
