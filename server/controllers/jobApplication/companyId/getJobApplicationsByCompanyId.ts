import { ObjectId } from 'mongodb';
import { jobApplicationsCollection } from '../../../lib/mongoDBCollections';
import logger from '../../../lib/winstonLogger';

// This handler retrieves job applications by their matching company id.

export default function getJobApplicationsByCompanyId(companyId: string) {
  try {
    // Find job applications by their company id.
    return jobApplicationsCollection
      .find({
        companyId: new ObjectId(companyId),
      })
      .toArray();
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error retrieving job applications by company id:', error);
    throw new Error(
      'Could not retrieve the job applications due to an error. Please try again.',
    );
  }
}
