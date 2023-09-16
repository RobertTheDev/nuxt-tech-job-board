import { ObjectId } from 'mongodb';
import { companyOwnersCollection } from '../../lib/mongoDBCollections';

export default function deleteCompanyOwnerById(id: string) {
  // Delete the company owner by its id.
  return companyOwnersCollection.deleteOne({
    _id: new ObjectId(id),
  });
}
