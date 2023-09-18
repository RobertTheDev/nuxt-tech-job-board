import { ObjectId, DeleteResult } from 'mongodb';
import { companyOwnersCollection } from '../../lib/mongoDBCollections';
import logger from '../../lib/winstonLogger';

export default async function deleteCompanyOwnerById(
  id: string,
): Promise<DeleteResult> {
  try {
    // Delete the company owner by its id.
    return await companyOwnersCollection.deleteOne({
      _id: new ObjectId(id),
    });
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error deleting company owner:', error);
    throw new Error(
      'Could not delete the company owner due to an error. Please try again.',
    );
  }
}
