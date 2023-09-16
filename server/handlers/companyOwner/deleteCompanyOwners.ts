import { companyOwnersCollection } from '../../lib/mongoDBCollections';

export default function deleteCompanyOwners() {
  // Delete all the company owners.
  return companyOwnersCollection.deleteMany();
}
