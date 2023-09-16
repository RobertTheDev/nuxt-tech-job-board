import { ObjectId } from 'mongodb';
import { savedJobPostsCollection } from '../../lib/mongoDBCollections';

// This handler finds and returns a saved job post by its matching user id and job post id.

export default async function getSavedJobPostByUserIdAndJobPostId(
  userId: string,
  jobPostId: string,
) {
  // Find and retrun the saved job post by user id and job post id.
  return await savedJobPostsCollection.findOne({
    userId: new ObjectId(userId),
    jobPostId: new ObjectId(jobPostId),
  });
}
