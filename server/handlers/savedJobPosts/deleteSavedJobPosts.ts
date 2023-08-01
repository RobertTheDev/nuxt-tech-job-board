import { savedJobPostsCollection } from '../../lib/collections';

export default function deleteSavedJobPosts() {
  // Delete the saved job posts from the database.
  return savedJobPostsCollection.deleteMany();
}
