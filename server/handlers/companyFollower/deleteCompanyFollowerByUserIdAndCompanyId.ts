import { ObjectId } from 'mongodb';
import { savedJobPostsCollection } from '../../lib/collections';

// This handler finds and deletes a company follower by its matching user id and company id.

export default async function deleteCompanyFollowerByUserIdAndCompanyId(
  userId: string,
  companyId: string,
) {
  // Find and delete company follower by its user id company id from the database.
  return await savedJobPostsCollection.findOneAndDelete({
    userId: new ObjectId(userId),
    companyId: new ObjectId(companyId),
  });
}
