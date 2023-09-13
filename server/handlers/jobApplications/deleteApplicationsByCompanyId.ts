import { ObjectId } from 'mongodb';
import { applicationsCollection } from '../../lib/collections';

export default function deleteApplicationsByCompanyId(companyId: string) {
  // Find and delete all applications by their company id.
  return applicationsCollection.deleteMany({
    companyId: new ObjectId(companyId),
  });
}
