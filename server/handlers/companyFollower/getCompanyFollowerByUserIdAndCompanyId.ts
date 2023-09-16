import { ObjectId } from 'mongodb';
import { companyFollowersCollection } from '../../lib/mongoDBCollections';

// This handler finds and returns a company follower by its matching user id and company id.

export default async function getCompanyFollowerByUserIdAndCompanyId(
  userId: string,
  companyId: string,
) {
  // Find and retrun the company follower by user id and company id.
  return await companyFollowersCollection.findOne({
    userId: new ObjectId(userId),
    companyId: new ObjectId(companyId),
  });
}
