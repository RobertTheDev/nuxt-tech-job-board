import { jobApplicationsCollection } from '../../lib/collections';

export default function getJobApplications() {
  // Find job applications.
  return jobApplicationsCollection.find().toArray();
}
