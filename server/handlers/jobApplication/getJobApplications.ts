import { jobApplicationsCollection } from '../../lib/mongoDBCollections';

export default function getJobApplications() {
  // Find job applications.
  return jobApplicationsCollection.find().toArray();
}
