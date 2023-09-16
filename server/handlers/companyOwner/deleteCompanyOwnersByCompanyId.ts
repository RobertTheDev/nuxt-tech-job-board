import { ObjectId } from 'mongodb';
import { companyOwnersCollection } from '../../lib/mongoDBCollections';

export default function deleteCompanyOwnersByCompanyId(companyId: string) {
  // Delete the company owners by their company id.
  return companyOwnersCollection.deleteMany({
    companyId: new ObjectId(companyId),
  });
}
