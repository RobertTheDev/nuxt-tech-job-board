import { ObjectId } from 'mongodb';
import { jobApplicationsCollection } from '../../lib/collections';

export default function getJobApplicationsByUserId(userId: string) {
  // Find job applications by user id.
  return jobApplicationsCollection.find({
    userId: new ObjectId(userId),
  });
}
