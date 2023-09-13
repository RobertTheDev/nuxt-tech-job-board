import { ObjectId } from 'mongodb';
import { applicationsCollection } from '../../lib/collections';

export default function getApplicationsByCompanyId(companyId: string) {
  // Find applications by their company id.
  return applicationsCollection.find({
    companyId: new ObjectId(companyId),
  });
}
