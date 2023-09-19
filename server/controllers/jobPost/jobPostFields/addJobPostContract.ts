import { ObjectId } from 'mongodb';
import logger from '../../../lib/winstonLogger';
import getJobPostById from '../id/getJobPostById';
import { jobPostsCollection } from '../../../lib/mongoDBCollections';
import addContractSchema from '@/models/jobPost/validators/jobPostFieldSchemas/addContractSchema';

export default async function addJobPostContract(id: string, body: any) {
  try {
    // Validate the body.
    const validatedBody = await addContractSchema.validate(body);

    // Update the job post by its id with the inputted body.
    await jobPostsCollection.findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: validatedBody },
    );

    // Find and return the updated job post by its id.
    return await getJobPostById(id);
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error adding job post contract:', error);
    throw new Error(
      'Could not add job post contract due to an internal server error. Please try again.',
    );
  }
}
