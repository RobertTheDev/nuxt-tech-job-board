import { ObjectId } from 'mongodb';
import logger from '../../../lib/winstonLogger';
import { jobPostsCollection } from '../../../lib/mongoDBCollections';

export default function deleteJobPostsByCompanyId(companyId: string) {
  try {
    return jobPostsCollection.deleteMany({
      companyId: new ObjectId(companyId),
    });
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error deleting job posts by company id:', error);
    throw new Error(
      'Could not delete job posts due to an internal server error. Please try again.',
    );
  }
}
