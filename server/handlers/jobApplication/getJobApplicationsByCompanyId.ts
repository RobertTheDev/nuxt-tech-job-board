import { ObjectId } from 'mongodb';
import { jobApplicationsCollection } from '../../lib/collections';

export default function getJobApplicationsByCompanyId(companyId: string) {
  // Find job applications by their company id.
  return jobApplicationsCollection.find({
    companyId: new ObjectId(companyId),
  });
}
