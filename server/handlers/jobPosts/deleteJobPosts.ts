import { jobPostsCollection } from '../../lib/collections';

export default function deleteJobPosts() {
  // Delete the job posts from the database.
  return jobPostsCollection.deleteMany();
}