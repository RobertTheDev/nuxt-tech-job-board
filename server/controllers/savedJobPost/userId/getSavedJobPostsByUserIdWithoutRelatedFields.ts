import { ObjectId, Document } from 'mongodb';
import logger from '../../../lib/winstonLogger';
import { savedJobPostsCollection } from '../../../lib/mongoDBCollections';

// This handler finds and returns all saved job posts by its matching id.
// This handler lookups related job post and user from their collections.

export default async function getSavedJobPostsWithoutRelatedFields(
  userId: string,
): Promise<Document[]> {
  try {
    // Return the saved job posts by user id.
    return await savedJobPostsCollection
      .find({ userId: new ObjectId(userId) })
      .toArray();
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error(
      'Error retrieving saved job posts by user id without related fields:',
      error,
    );
    throw new Error(
      'Could not retireve the saved job posts due to an error. Please try again.',
    );
  }
}
