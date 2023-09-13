import { ObjectId } from 'mongodb';
import { savedJobPostsCollection } from '../../lib/collections';

// This handler deletes all saved job posts by their matching user id.

export default function deleteSavedJobPostsByUserId(userId: string) {
  // Delete saved job posts by their user id from the database.
  return savedJobPostsCollection.deleteMany({
    userId: new ObjectId(userId),
  });
}
