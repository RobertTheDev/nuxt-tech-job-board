import { ObjectId } from 'mongodb';
import { companyFollowersCollection } from '../../../lib/mongoDBCollections';
import logger from '../../../lib/winstonLogger';

// This handler deletes all company followers by their matching user id.

export default function deleteCompanyFollowersByUserId(userId: string) {
  try {
    // Delete the company followers by their useår id.
    return companyFollowersCollection.deleteMany({
      userId: new ObjectId(userId),
    });
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error deleting company followers by user id:', error);
    throw new Error(
      'Could not delete the company followers due to an error. Please try again.',
    );
  }
}
