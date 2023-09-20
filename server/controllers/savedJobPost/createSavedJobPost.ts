import { Document, ObjectId } from 'mongodb';
import logger from '../../lib/winstonLogger';
import { savedJobPostsCollection } from '../../lib/mongoDBCollections';
import getSavedJobPostById from './id/getSavedJobPostById';

// This handler creates and inserts a new saved job post.

export default async function createSavedJobPost(body: {
  userId: string;
  jobPostId: string;
}): Promise<Document | null> {
  try {
    // Create saved job with signed in user's id and job post id.
    const savedJobPost = await savedJobPostsCollection.insertOne({
      createdAt: new Date(),
      userId: new ObjectId(body.userId),
      jobPostId: new ObjectId(body.jobPostId),
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
