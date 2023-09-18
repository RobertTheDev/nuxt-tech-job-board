import { Document } from 'mongodb';
import logger from '../../lib/winstonLogger';
import { jobInterviewsCollection } from '../../lib/mongoDBCollections';
import createJobInterviewSchema from '../../validators/jobInterview/createJobInterviewSchema';
import getJobInterviewById from './getJobInterviewById';

// This handler creates and inserts a new job interview.

export default async function createJobInterview(
  body: any,
): Promise<Document | null> {
  try {
    // Validate the body.
    const validatedBody = await createJobInterviewSchema.validate(body);

    // Create the job interview.
    const createdJobInterview = await jobInterviewsCollection.insertOne(
      validatedBody,
    );

    // Return created job interview by its id.
    return await getJobInterviewById(createdJobInterview.insertedId.toString());
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error creating job interview:', error);
    throw new Error(
      'Could not create the job interview due to an error. Please try again.',
    );
  }
}
