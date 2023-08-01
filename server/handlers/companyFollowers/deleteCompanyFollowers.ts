import { companyFollowersCollection } from '../../lib/collections';

export default function deleteCompanyFollowers() {
  // Delete all the company followers.
  return companyFollowersCollection.deleteMany();
}
