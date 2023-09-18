import { ObjectId } from 'mongodb';
import logger from '../../../lib/winstonLogger';
import getJobPostById from '../getJobPostById';
import { jobPostsCollection } from '../../../lib/mongoDBCollections';
import { AddDeadlineDateSchemaType } from '../../../validators/jobPost/jobPostFieldSchemas/addDeadlineDateSchema';

export default async function addJobPostDeadlineDate(
  id: string,
  body: AddDeadlineDateSchemaType,
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
    logger.error('Error adding job post deadline date:', error);
    throw new Error(
      'Could not add job post deadline date due to an internal server error. Please try again.',
    );
  }
}
