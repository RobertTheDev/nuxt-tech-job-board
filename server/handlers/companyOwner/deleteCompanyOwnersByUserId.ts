import { ObjectId } from 'mongodb';
import { companyOwnersCollection } from '../../lib/mongoDBCollections';

export default function deleteCompanyOwnersByUserId(userId: string) {
  // Delete the companies by their user id.
  return companyOwnersCollection.deleteMany({
    userId: new ObjectId(userId),
  });
}
