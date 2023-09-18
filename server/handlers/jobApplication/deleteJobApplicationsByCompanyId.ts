import { ObjectId } from 'mongodb';
import { jobApplicationsCollection } from '../../lib/mongoDBCollections';
import logger from '../../lib/winstonLogger';

// This handler deletes job applications by their matching company id.

export default function deleteJobApplicationsByCompanyId(companyId: string) {
  try {
    // Find and delete all job applications by their company id.
    return jobApplicationsCollection.deleteMany({
      companyId: new ObjectId(companyId),
    });
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error deleting job applications by company id:', error);
    throw new Error(
      'Could not delete the job applications due to an error. Please try again.',
    );
  }
}
