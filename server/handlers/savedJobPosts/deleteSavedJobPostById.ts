import { ObjectId } from 'mongodb';
import { savedJobPostsCollection } from '../../lib/collections';

// This handler finds and deletes a saved job post by its id.

export default function deleteSavedJobPostById(id: string) {
  // Delete the saved job post by its id from the database.
  return savedJobPostsCollection.findOneAndDelete({
    _id: new ObjectId(id),
  });
}
