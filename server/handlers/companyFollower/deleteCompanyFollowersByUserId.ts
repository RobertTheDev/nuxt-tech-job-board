import { ObjectId } from 'mongodb';
import { companyFollowersCollection } from '../../lib/mongoDBCollections';

// This handler deletes all company followers by their matching user id.

export default function deleteCompanyFollowersByUserId(userId: string) {
  // Delete the company followers by their user id.
  return companyFollowersCollection.deleteMany({
    userId: new ObjectId(userId),
  });
}
