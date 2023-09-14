import { jobApplicationsCollection } from '../../lib/collections';

export default function deleteJobApplications() {
  // Find and delete all job applications.
  return jobApplicationsCollection.deleteMany();
}
