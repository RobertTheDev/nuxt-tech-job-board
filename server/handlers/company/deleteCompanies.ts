import { DeleteResult } from 'mongodb';
import logger from '../../lib/winstonLogger';
import { companiesCollection } from '../../lib/mongoDBCollections';

// This handler deletes all the app's companies from mongoDB.

export default async function deleteCompanies(): Promise<DeleteResult> {
  try {
    // Deletes all the app's companies from mongoDB.
    return await companiesCollection.deleteMany();
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error deleting companies:', error);
    throw new Error(
      'Could not delete the companies due to an error. Please try again.',
    );
  }
}
