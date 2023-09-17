import { DeleteResult } from 'mongodb';
import logger from '../../lib/winstonLogger';
import { companyOwnersCollection } from '../../lib/mongoDBCollections';

// This handler deletes all the app's company owners from mongoDB.

export default async function deleteCompanyOwners(): Promise<DeleteResult> {
  try {
    // Deletes all the app's company owners from mongoDB.
    return await companyOwnersCollection.deleteMany();
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error deleting company owners:', error);
    throw new Error(
      'Could not delete the company owners due to an error. Please try again.',
    );
  }
}
