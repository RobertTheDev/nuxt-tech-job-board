import { ObjectId } from 'mongodb';
import { companyFollowersCollection } from '../../lib/mongoDBCollections';
import logger from '../../lib/winstonLogger';

// This handler deletes all company followers by their matching company id.

export default function deleteCompanyFollowersByCompanyId(companyId: string) {
  try {
    // Delete the company followers by their company id.
    return companyFollowersCollection.deleteMany({
      companyId: new ObjectId(companyId),
    });
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error deleting company followers by company id:', error);
    throw new Error(
      'Could not delete the company followers due to an error. Please try again.',
    );
  }
}
