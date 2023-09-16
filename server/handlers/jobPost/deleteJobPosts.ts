import { jobPostsCollection } from '../../lib/mongoDBCollections';

export default function deleteJobPosts() {
  // Delete the job posts from the database.
  return jobPostsCollection.deleteMany();
}
