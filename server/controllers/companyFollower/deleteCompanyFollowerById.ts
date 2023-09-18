import { ObjectId, DeleteResult } from 'mongodb';
import { companyFollowersCollection } from '../../lib/mongoDBCollections';
import logger from '../../lib/winstonLogger';

// This handler finds and deletes a company follower by its id.

export default async function deleteCompanyFollowerById(
  id: string,
): Promise<DeleteResult> {
  try {
    // Delete the company follower by its id.
    return await companyFollowersCollection.deleteOne({
      _id: new ObjectId(id),
    });
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error deleting company follower:', error);
    throw new Error(
      'Could not delete the company follower due to an error. Please try again.',
    );
  }
}
