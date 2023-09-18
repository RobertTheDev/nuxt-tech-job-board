import { Document, WithId } from 'mongodb';
import { jobApplicationsCollection } from '../../lib/mongoDBCollections';
import createJobApplicationSchema from '../../validators/jobApplication/createJobApplicationSchema';
import logger from '../../lib/winstonLogger';
import getJobApplicationById from './id/getJobApplicationById';

// This handler creates and inserts a new job application.

export default async function createJobApplication(
  body: any,
): Promise<WithId<Document> | null> {
  try {
    // Validate the body.
    const validatedBody = await createJobApplicationSchema.validate(body);

    // Create a job application.
    const createdApplication = await jobApplicationsCollection.insertOne(
      validatedBody,
    );

    // Find and return the created job application.
    return await getJobApplicationById(
      createdApplication.insertedId.toString(),
    );
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error creating job application:', error);
    throw new Error(
      'Could not create the job application due to an error. Please try again.',
    );
  }
}
