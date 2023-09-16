import { ObjectId } from 'mongodb';
import { companyFollowersCollection } from '../../lib/mongoDBCollections';

// This handler finds and deletes a company follower by its id.

export default function deleteCompanyFollowerById(id: string) {
  // Delete the company follower by its id.
  return companyFollowersCollection.deleteOne({
    _id: new ObjectId(id),
  });
}
