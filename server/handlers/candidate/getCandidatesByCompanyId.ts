import { ObjectId } from 'mongodb';
import { candidatesCollection } from '../../lib/collections';

export default function getCandidatesByCompanyId(companyId: string) {
  // Find candidates by their company id.
  return candidatesCollection.find({
    companyId: new ObjectId(companyId),
  });
}
