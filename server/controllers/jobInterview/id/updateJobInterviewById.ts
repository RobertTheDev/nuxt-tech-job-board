import { ObjectId } from 'mongodb';
import { jobInterviewsCollection } from '../../../lib/mongoDBCollections';
import updateJobInterviewSchema from '../../../validators/jobInterview/updateJobInterviewSchema';
import logger from '../../../lib/winstonLogger';
import getJobInterviewById from './getJobInterviewById';

// This handler updates a job interview by its id from MongoDB.

export default async function updateJobPostById(id: string, body: any) {
  try {
    const validatedBody = await updateJobInterviewSchema.validate(body);
    // Update the job interview by its id with the inputted body.
    await jobInterviewsCollection.findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: { validatedBody } },
    );

    // Find and return the updated job interview by its id.
    return await getJobInterviewById(id);
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error updating job interview by id:', error);
    throw new Error(
      'Could not update the job interview due to an error. Please try again.',
    );
  }
}
