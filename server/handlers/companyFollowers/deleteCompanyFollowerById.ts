import { ObjectId } from 'mongodb';
import { companyFollowersCollection } from '../../lib/collections';

export default function deleteCompanyFollowerById(id: string) {
  // Delete the company follower by its id.
  return companyFollowersCollection.deleteOne({
    _id: new ObjectId(id),
  });
}
