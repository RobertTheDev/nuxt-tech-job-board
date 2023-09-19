import { ObjectId, DeleteResult } from 'mongodb';
import { savedJobPostsCollection } from '../../../lib/mongoDBCollections';
import logger from '../../../lib/winstonLogger';

// This handler finds and deletes a company follower by its matching user id and company id.

export default async function deleteCompanyFollowerByUserIdAndCompanyId(
  userId: string,
  companyId: string,
): Promise<DeleteResult> {
  try {
    // Find and delete company follower by its user id company id from the database.
    return await savedJobPostsCollection.deleteOne({
      userId: new ObjectId(userId),
      companyId: new ObjectId(companyId),
    });
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error(
      'Error deleting company follower by user id and company id:',
      error,
    );
    throw new Error(
      'Could not delete the company follower due to an error. Please try again.',
    );
  }
}
