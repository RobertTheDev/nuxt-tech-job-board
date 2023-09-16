import { ObjectId } from 'mongodb';
import { companyFollowersCollection } from '../../lib/mongoDBCollections';

// This handler finds and returns all company followers by its matching id.
// This handler lookups related company and user from their collections.

export default async function getCompanyFollowersByUserIdWithoutRelatedFields(
  userId: string,
) {
  // Return the company followerss by user id.
  return await companyFollowersCollection
    .find({ userId: new ObjectId(userId) })
    .toArray();
}
