import { Document } from 'mongodb';
import { jobPostsCollection } from '../../lib/mongoDBCollections';
import logger from '../../lib/winstonLogger';

// This handler finds and returns all the app's job posts from mongoDB.

export default async function getJobPosts(): Promise<Document[]> {
  try {
    // Finds and returns all the app's job posts from mongoDB.
    return await jobPostsCollection
      .aggregate(
        [
          {
            $match: {
              published: true,
            },
          },
          {
            $lookup: {
              from: 'companies',
              localField: 'companies._id',
              foreignField: 'jobPosts.companyId',
              as: 'company',
            },
          },
          {
            $unwind: '$company', // Unwind the "company" array
          },
        ],

        { maxTimeMS: 60000, allowDiskUse: true },
      )
      .toArray();
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error retrieving job posts:', error);
    throw new Error(
      'Could not retrieve posts due to an error. Please try again.',
    );
  }
}
