import { ObjectId } from 'mongodb';
import { savedJobPostsCollection } from '../../lib/mongoDBCollections';

// This handler finds and deletes a saved job post by its id.

export default function deleteSavedJobPostById(id: string) {
  // Delete the saved job post by its id.
  return savedJobPostsCollection.findOneAndDelete({
    _id: new ObjectId(id),
  });
}
