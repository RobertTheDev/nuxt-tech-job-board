import { ObjectId, Document } from 'mongodb';
import { jobPostsCollection } from '../../lib/mongoDBCollections';
import logger from '../../lib/winstonLogger';

export default async function getJobPostById(
  id: string,
): Promise<Document | null> {
  try {
    const jobPost = await jobPostsCollection
      .aggregate(
        [
          {
            $match: {
              _id: new ObjectId(id),
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

    return jobPost[0];
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error retrieving job post by id:', error);
    throw new Error(
      'Could not retrieve job post by id due to an error. Please try again.',
    );
  }
}
