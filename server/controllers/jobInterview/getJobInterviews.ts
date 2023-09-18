import { Document } from 'mongodb';
import { jobInterviewsCollection } from '../../lib/mongoDBCollections';
import logger from '../../lib/winstonLogger';

// This handler finds and returns all the app's job interviews from mongoDB.

export default async function getJobInterviews(): Promise<Document[]> {
  try {
    // Find and return all job interviews.
    return await jobInterviewsCollection
      .aggregate(
        [
          {
            $lookup: {
              from: 'jobPosts',
              localField: 'jobInterviews.companyId',
              foreignField: 'companies._id',
              as: 'job-posts',
            },
          },
          {
            $lookup: {
              from: 'users',
              localField: 'users._id',
              foreignField: 'jobInterviews.userId',
              as: 'owners',
            },
          },
        ],

        { maxTimeMS: 60000, allowDiskUse: true },
      )
      .toArray();
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error retrieving job interviews:', error);
    throw new Error(
      'Could not retrieve job interviews due to an error. Please try again.',
    );
  }
}
