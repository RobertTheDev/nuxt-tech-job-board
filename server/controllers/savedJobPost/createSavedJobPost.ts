import { Document, ObjectId } from 'mongodb';
import logger from '../../lib/winstonLogger';
import { savedJobPostsCollection } from '../../lib/mongoDBCollections';
import getSavedJobPostById from './id/getSavedJobPostById';
import createSavedJobPostSchema from '@/models/savedJobPost/validators/createSavedJobPostSchema';

// This handler creates and inserts a new saved job post.

export default async function createSavedJobPost(
  body: any,
): Promise<Document | null> {
  try {
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
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error creating saved job post:', error);
    throw new Error(
      'Could not save the job post due to an error. Please try again.',
    );
  }
}
