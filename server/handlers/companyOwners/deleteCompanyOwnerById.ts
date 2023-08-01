import { ObjectId } from 'mongodb';
import { companyOwnersCollection } from '../../lib/collections';

export default function deleteCompanyOwnerById(id: string) {
  // Delete the company owner by its id.
  return companyOwnersCollection.deleteOne({
    _id: new ObjectId(id),
  });
}
