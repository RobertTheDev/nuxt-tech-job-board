import { ObjectId } from 'mongodb';
import logger from '../../../lib/winstonLogger';
import { jobPostsCollection } from '../../../lib/mongoDBCollections';
import getJobPostById from './getJobPostById';
import updateJobPostSchema from '@/models/jobPost/validators/updateJobPostSchema';

// This handler updates a job post by its id from MongoDB.

export default async function updateJobPostById(id: string, body: any) {
  try {
    const validatedBody = await updateJobPostSchema.validate(body);
    // Update the job post by its id with the inputted body.
    await jobPostsCollection.findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: validatedBody },
    );

    // Find and return the updated job post by its id.
    return await getJobPostById(id);
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error updating notification by id:', error);
    throw new Error(
      'Could not update the notification due to an error. Please try again.',
    );
  }
}
