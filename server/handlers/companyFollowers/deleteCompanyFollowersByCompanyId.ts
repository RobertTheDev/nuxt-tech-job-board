import { ObjectId } from 'mongodb';
import { companyFollowersCollection } from '../../lib/collections';

export default function deleteCompanyFollowersByCompanyId(companyId: string) {
  // Delete the company followers by their company id.
  return companyFollowersCollection.deleteMany({
    companyId: new ObjectId(companyId),
  });
}
