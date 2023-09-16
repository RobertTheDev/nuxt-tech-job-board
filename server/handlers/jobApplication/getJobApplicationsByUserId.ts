import { ObjectId } from 'mongodb';
import { jobApplicationsCollection } from '../../lib/mongoDBCollections';

export default function getJobApplicationsByUserId(userId: string) {
  // Find job applications by user id.
  return jobApplicationsCollection.find({
    userId: new ObjectId(userId),
  });
}
