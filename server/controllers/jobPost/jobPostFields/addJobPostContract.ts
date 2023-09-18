import { ObjectId } from 'mongodb';
import logger from '../../../lib/winstonLogger';
import getJobPostById from '../id/getJobPostById';
import { jobPostsCollection } from '../../../lib/mongoDBCollections';
import { AddContractSchemaType } from '../../../validators/jobPost/jobPostFieldSchemas/addContractSchema';

export default async function addJobPostContract(
  id: string,
  body: AddContractSchemaType,
) {
  try {
    // Update the job post by its id with the inputted body.
    await jobPostsCollection.findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: body },
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
