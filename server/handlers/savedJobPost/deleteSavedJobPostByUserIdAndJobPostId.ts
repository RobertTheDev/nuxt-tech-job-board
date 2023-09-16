import { ObjectId } from 'mongodb';
import { savedJobPostsCollection } from '../../lib/mongoDBCollections';

// This handler finds and deletes a saved job post by its matching user id and job post id.

export default async function deleteSavedJobPostByUserIdAndJobPostId(
  userId: string,
  jobPostId: string,
) {
  // Find and delete saved job post by its user ad job post id from the database.
  return await savedJobPostsCollection.findOneAndDelete({
    userId: new ObjectId(userId),
    jobPostId: new ObjectId(jobPostId),
  });
}
