import { ObjectId, DeleteResult } from 'mongodb';
import { companiesCollection } from '../../lib/mongoDBCollections';
import logger from '../../lib/winstonLogger';

// This handler finds and deletes a company by its id.

export default async function deleteCompanyById(
  id: string,
): Promise<DeleteResult> {
  try {
    // Delete company by its id.
    return await companiesCollection.deleteOne({
      _id: new ObjectId(id),
    });
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error deleting company by id:', error);
    throw new Error(
      'Could not delete the company due to an error. Please try again.',
    );
  }
}
