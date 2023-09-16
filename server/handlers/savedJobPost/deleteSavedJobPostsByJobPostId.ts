import { ObjectId } from 'mongodb';
import { savedJobPostsCollection } from '../../lib/mongoDBCollections';

// This handler deletes all saved job posts by their matching job post id.

export default function deleteSavedJobPostsByJobPostId(jobPostId: string) {
  // Delete saved job posts by their job post id from the database.
  return savedJobPostsCollection.deleteMany({
    jobPostId: new ObjectId(jobPostId),
  });
}
