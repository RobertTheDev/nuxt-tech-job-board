import { ObjectId } from 'mongodb';
import logger from '../../../lib/winstonLogger';
import { companyOwnersCollection } from '../../../lib/mongoDBCollections';

export default function deleteCompanyOwnersByCompanyId(companyId: string) {
  try {
    // Delete the company owners by their company id.
    return companyOwnersCollection.deleteMany({
      companyId: new ObjectId(companyId),
    });
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error deleting company owners by company id:', error);
    throw new Error(
      'Could not delete the company owners due to an error. Please try again.',
    );
  }
}
