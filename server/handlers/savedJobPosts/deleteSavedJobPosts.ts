import { savedJobPostsCollection } from '../../lib/collections';

// This handler deletes all saved job posts.

export default function deleteSavedJobPosts() {
  // Delete the saved job posts from the database.
  return savedJobPostsCollection.deleteMany();
}
