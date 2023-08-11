import { ObjectId } from 'mongodb';
import { savedJobPostsCollection } from '../../lib/collections';
import createSavedJobPostSchema, {
  CreateSavedJobPostSchemaType,
} from '../../validators/savedJobPosts/createSavedJobPostSchema';
import getSavedJobPostById from './getSavedJobPostById';

// This handler creates and inserts a new saved job post.

export default async function createSavedJobPost(
  body: CreateSavedJobPostSchemaType,
) {
  // Validate the body.
  const validatedBody = await createSavedJobPostSchema.validate(body);

  // Get the fields from the validated body.
  const { createdAt, userId, jobPostId } = validatedBody;

  // Create saved job with signed in user's id and job post id.
  const savedJobPost = await savedJobPostsCollection.insertOne({
    createdAt,
    userId: new ObjectId(userId),
    jobPostId: new ObjectId(jobPostId),
  });

  // Return created saved job post by its id.
  return await getSavedJobPostById(savedJobPost.insertedId.toString());
}
