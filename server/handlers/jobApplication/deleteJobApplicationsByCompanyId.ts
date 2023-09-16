import { ObjectId } from 'mongodb';
import { jobApplicationsCollection } from '../../lib/mongoDBCollections';

export default function deleteJobApplicationsByCompanyId(companyId: string) {
  // Find and delete all job applications by their company id.
  return jobApplicationsCollection.deleteMany({
    companyId: new ObjectId(companyId),
  });
}
