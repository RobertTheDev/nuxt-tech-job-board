import { ObjectId } from 'mongodb';
import { companyFollowersCollection } from '../../lib/collections';

export default function deleteCompanyFollowersByUserId(userId: string) {
  // Delete the company followers by their user id.
  return companyFollowersCollection.deleteMany({
    userId: new ObjectId(userId),
  });
}
