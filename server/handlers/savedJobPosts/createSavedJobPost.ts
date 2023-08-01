import { ObjectId } from 'mongodb';
import { savedJobPostsCollection } from '../../lib/collections';
import { CreateSavedJobPostSchemaType } from '../../validators/savedJobPosts/createSavedJobPostSchema';
import getSavedJobPostById from './getSavedJobPostById';

export default async function createSavedJobPost({
  jobPostId,
  userId,
}: CreateSavedJobPostSchemaType) {
  // Create saved job with signed in user's id and job post id.
  const savedJobPost = await savedJobPostsCollection.insertOne({
    createdAt: new Date(),
    jobPostId: new ObjectId(jobPostId),
    userId: new ObjectId(userId),
  });

  // Return created saved job post by its id.
  return await getSavedJobPostById(savedJobPost.insertedId.toString());
}
