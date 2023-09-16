import { ObjectId } from 'mongodb';
import { jobInterviewsCollection } from '../../lib/mongoDBCollections';

export default function deleteJobInterviewsByUserId(userId: string) {
  // Find and delete all jon interviews by their user id.
  return jobInterviewsCollection.deleteMany({
    userId: new ObjectId(userId),
  });
}
