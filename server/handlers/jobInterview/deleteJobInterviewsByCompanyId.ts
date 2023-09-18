import { DeleteResult, ObjectId } from 'mongodb';
import { jobInterviewsCollection } from '../../lib/mongoDBCollections';
import logger from '../../lib/winstonLogger';

export default function deleteJobInterviewsByCompanyId(
  companyId: string,
): Promise<DeleteResult> {
  try {
    // Find and delete all jon interviews by their company id.
    return jobInterviewsCollection.deleteMany({
      companyId: new ObjectId(companyId),
    });
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error deleting job interviews by company id:', error);
    throw new Error(
      'Could not delete the job interviews due to an error. Please try again.',
    );
  }
}
