import { ObjectId } from 'mongodb';
import { jobInterviewsCollection } from '../../lib/collections';

export default function deleteJobInterviewsByCompanyId(companyId: string) {
  // Find and delete all jon interviews by their company id.
  return jobInterviewsCollection.deleteMany({
    companyId: new ObjectId(companyId),
  });
}
