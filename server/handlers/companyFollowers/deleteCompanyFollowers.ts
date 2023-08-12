import { companyFollowersCollection } from '../../lib/collections';

// This handler deletes all company followers.

export default function deleteCompanyFollowers() {
  // Delete all the company followers.
  return companyFollowersCollection.deleteMany();
}
