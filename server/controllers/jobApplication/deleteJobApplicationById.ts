import { ObjectId, DeleteResult } from 'mongodb';
import { jobApplicationsCollection } from '../../lib/mongoDBCollections';
import logger from '../../lib/winstonLogger';

// This handler finds and deletes a job application by its id.

export default async function deleteJobApplicationById(
  id: string,
): Promise<DeleteResult> {
  try {
    // Delete job application by its id.
    return await jobApplicationsCollection.deleteOne({
      _id: new ObjectId(id),
    });
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error deleting job application by id:', error);
    throw new Error(
      'Could not delete the job application due to an error. Please try again.',
    );
  }
}
