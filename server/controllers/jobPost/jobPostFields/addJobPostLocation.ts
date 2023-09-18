import { ObjectId } from 'mongodb';
import logger from '../../../lib/winstonLogger';
import getJobPostById from '../id/getJobPostById';
import { jobPostsCollection } from '../../../lib/mongoDBCollections';
import { AddLocationSchemaType } from '../../../validators/jobPost/jobPostFieldSchemas/addLocationSchema';

export default async function addJobPostLocation(
  id: string,
  body: AddLocationSchemaType,
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
    logger.error('Error adding job post location:', error);
    throw new Error(
      'Could not add job post location due to an internal server error. Please try again.',
    );
  }
}
