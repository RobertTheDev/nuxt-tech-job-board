import { ObjectId } from 'mongodb';
import logger from '../../lib/winstonLogger';
import { companyOwnersCollection } from '../../lib/mongoDBCollections';

export default function deleteCompanyOwnersByUserId(userId: string) {
  try {
    // Delete the companies by their user id.
    return companyOwnersCollection.deleteMany({
      userId: new ObjectId(userId),
    });
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error deleting company owners by user id:', error);
    throw new Error(
      'Could not delete the company owners due to an error. Please try again.',
    );
  }
}
