import { companyOwnersCollection } from '../../lib/collections';

export default function deleteCompanyOwners() {
  // Delete all the company owners.
  return companyOwnersCollection.deleteMany();
}
