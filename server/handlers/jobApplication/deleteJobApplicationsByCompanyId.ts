import { ObjectId } from 'mongodb';
import { jobApplicationsCollection } from '../../lib/collections';

export default function deleteJobApplicationsByCompanyId(companyId: string) {
  // Find and delete all job applications by their company id.
  return jobApplicationsCollection.deleteMany({
    companyId: new ObjectId(companyId),
  });
}
