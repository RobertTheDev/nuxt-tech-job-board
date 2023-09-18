import { Document } from 'mongodb';
import { companiesCollection } from '../../lib/mongoDBCollections';
import logger from '../../lib/winstonLogger';

// This handler finds and returns all the app's companies from mongoDB.

export default async function getCompanies(): Promise<Document[]> {
  try {
    // Finds and returns all the app's companies from mongoDB.
    return await companiesCollection.find().toArray();
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error retrieving companies:', error);
    throw new Error(
      'Could not retrieve companies due to an error. Please try again.',
    );
  }
}
