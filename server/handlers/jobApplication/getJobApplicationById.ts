import { Document, ObjectId, WithId } from 'mongodb';
import { jobApplicationsCollection } from '../../lib/mongoDBCollections';
import logger from '../../lib/winstonLogger';

// This handler gets a job application by its id.

export default async function getJobApplicationById(
  id: string,
): Promise<WithId<Document> | null> {
  try {
    // Find and return the job application by its id.
    return await jobApplicationsCollection.findOne({ _id: new ObjectId(id) });
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error retrieving job application by id:', error);
    throw new Error(
      'Could not update the job application due to an error. Please try again.',
    );
  }
}
