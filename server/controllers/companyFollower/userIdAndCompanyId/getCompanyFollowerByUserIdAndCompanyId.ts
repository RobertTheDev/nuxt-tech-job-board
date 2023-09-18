import { ObjectId } from 'mongodb';
import { companyFollowersCollection } from '../../../lib/mongoDBCollections';
import logger from '../../../lib/winstonLogger';

// This handler finds and returns a company follower by its matching user id and company id.

export default async function getCompanyFollowerByUserIdAndCompanyId(
  userId: string,
  companyId: string,
) {
  try {
    // Find and retrun the company follower by user id and company id.
    return await companyFollowersCollection.findOne({
      userId: new ObjectId(userId),
      companyId: new ObjectId(companyId),
    });
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error(
      'Error retrieving company follower by user id and company id:',
      error,
    );
    throw new Error(
      'Could not retrieve the company follower due to an error. Please try again.',
    );
  }
}
