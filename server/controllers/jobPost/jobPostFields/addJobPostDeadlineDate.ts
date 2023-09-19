import { ObjectId } from 'mongodb';
import logger from '../../../lib/winstonLogger';
import getJobPostById from '../id/getJobPostById';
import { jobPostsCollection } from '../../../lib/mongoDBCollections';
import addDeadlineDateSchema from '../../../validators/jobPost/jobPostFieldSchemas/addDeadlineDateSchema';

export default async function addJobPostDeadlineDate(id: string, body: any) {
  try {
    // Validate the body
    const validatedBody = await addDeadlineDateSchema.validate(body);

    // Update the job post by its id with the inputted body.
    await jobPostsCollection.findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: validatedBody },
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
