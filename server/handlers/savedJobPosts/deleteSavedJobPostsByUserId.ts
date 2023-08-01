import { ObjectId } from 'mongodb';
import { savedJobPostsCollection } from '../../lib/collections';

export default function deleteSavedJobPostsByUserId(userId: string) {
  // Delete saved job posts by their user id from the database.
  return savedJobPostsCollection.deleteMany({
    userId: new ObjectId(userId),
  });
}
