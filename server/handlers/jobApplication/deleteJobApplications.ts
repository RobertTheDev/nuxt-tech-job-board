import { jobApplicationsCollection } from '../../lib/mongoDBCollections';

export default function deleteJobApplications() {
  // Find and delete all job applications.
  return jobApplicationsCollection.deleteMany();
}
