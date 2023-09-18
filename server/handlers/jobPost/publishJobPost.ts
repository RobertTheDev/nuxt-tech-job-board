import { ObjectId } from 'mongodb';
import { jobPostsCollection } from '../../lib/mongoDBCollections';
import JobPost from '../../../models/jobPost/types/JobPost';
import logger from '../../lib/winstonLogger';
import getJobPostById from './getJobPostById';

export default async function publishJobPost(id: string) {
  try {
    // Update the job post by its id with the inputted body.

    const { title } = (await getJobPostById(id)) as JobPost;

    if (!title) {
      throw createError({
        statusCode: 404,
        statusMessage: `There are empty fields required to be completed before publishing.`,
      });
    }

    await jobPostsCollection.findOneAndUpdate(
      { _id: new ObjectId(id) },
      {
        $set: {
          published: true,
        },
      },
    );

    // Find and return the updated job post by its id.
    return await getJobPostById(id);
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error publishing job post:', error);
    throw new Error(
      'Could not publish job post due to an internal server error. Please try again.',
    );
  }
}
