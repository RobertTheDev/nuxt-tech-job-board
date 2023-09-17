import { DeleteResult } from 'mongodb';
import logger from '../../lib/winstonLogger';
import { companyFollowersCollection } from 'server/lib/mongoDBCollections';

// This handler deletes all the app's company followers from mongoDB.

export default async function deleteCompanyFollowers(): Promise<DeleteResult> {
  try {
    // Deletes all the app's company followers from mongoDB.
    return await companyFollowersCollection.deleteMany();
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error deleting company followers:', error);
    throw new Error(
      'Could not delete the company followers due to an error. Please try again.',
    );
  }
}
