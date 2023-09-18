import { ObjectId } from 'mongodb';
import { companyFollowersCollection } from '../../lib/mongoDBCollections';
import logger from '../../lib/winstonLogger';

// This handler finds and returns all company followers by its matching id.
// This handler lookups related company and user from their collections.

export default async function getCompanyFollowersByUserIdWithoutRelatedFields(
  userId: string,
) {
  try {
    // Return the company followerss by user id.
    return await companyFollowersCollection
      .find({ userId: new ObjectId(userId) })
      .toArray();
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error(
      'Error retrieving company followers by user id without realted fields:',
      error,
    );
    throw new Error(
      'Could not retrieve the company followers due to an error. Please try again.',
    );
  }
}
