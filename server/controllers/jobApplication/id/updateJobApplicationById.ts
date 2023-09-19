import { Document, ObjectId, WithId } from 'mongodb';
import logger from '../../../lib/winstonLogger';
import { jobApplicationsCollection } from '../../../lib/mongoDBCollections';
import getJobApplicationById from './getJobApplicationById';
import updateJobApplicationSchema from '@/models/jobApplication/validators/updateJobApplicationSchema';

// This handler updates and returns the job application by id.

export default async function updateJobApplicationById(
  id: string,
  body: any,
): Promise<WithId<Document> | null> {
  try {
    // Validate the body.
    const validatedBody = await updateJobApplicationSchema.validate(body);

    // Update the job application by its id with the inputted body.
    await jobApplicationsCollection.findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: validatedBody },
    );

    // Find and return the updated job application by its id.
    return await getJobApplicationById(id);
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error updating job application by id:', error);
    throw new Error(
      'Could not update the job application due to an error. Please try again.',
    );
  }
}
