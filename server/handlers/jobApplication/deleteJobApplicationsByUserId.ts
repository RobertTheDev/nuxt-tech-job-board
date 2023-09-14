import { ObjectId } from 'mongodb';
import { jobApplicationsCollection } from '../../lib/collections';

export default function deleteJobApplicationsByUserId(userId: string) {
  // Find and delete all job applications by their user id.
  return jobApplicationsCollection.deleteMany({
    userId: new ObjectId(userId),
  });
}
