import { ObjectId } from 'mongodb';
import { candidatesCollection } from '../../lib/collections';

export default function deleteCandidatesByCompanyId(companyId: string) {
  // Find and delete all candidates by their company id.
  return candidatesCollection.deleteMany({
    companyId: new ObjectId(companyId),
  });
}
