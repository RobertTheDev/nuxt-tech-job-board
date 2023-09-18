import { usersCollection } from '../../lib/mongoDBCollections';
import logger from '../../lib/winstonLogger';

export default async function getUsersWithRelatedFields() {
  try {
    return await usersCollection
      .aggregate([], { maxTimeMS: 60000, allowDiskUse: true })
      .toArray();
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error retrieving users with related fields:', error);
    throw new Error(
      'Could not retrieve the users due to an error. Please try again.',
    );
  }
}
