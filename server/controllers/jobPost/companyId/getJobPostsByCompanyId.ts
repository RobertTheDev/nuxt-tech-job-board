import { ObjectId } from 'mongodb';
import logger from '../../../lib/winstonLogger';
import { jobPostsCollection } from '../../../lib/mongoDBCollections';

export default async function getJobPostsByCompanyId(companyId: string) {
  try {
    return await jobPostsCollection
      .aggregate(
        [
          {
            $match: {
              companyId: new ObjectId(companyId),
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
        ],
        { maxTimeMS: 60000, allowDiskUse: true },
      )
      .toArray();
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error retrieving job posts by company id:', error);
    throw new Error(
      'Could not retrieve job post due to an internal server error. Please try again.',
    );
  }
}
