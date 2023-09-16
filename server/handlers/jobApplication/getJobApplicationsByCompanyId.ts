import { ObjectId } from 'mongodb';
import { jobApplicationsCollection } from '../../lib/mongoDBCollections';

export default function getJobApplicationsByCompanyId(companyId: string) {
  // Find job applications by their company id.
  return jobApplicationsCollection
    .find({
      companyId: new ObjectId(companyId),
    })
    .toArray();
}
