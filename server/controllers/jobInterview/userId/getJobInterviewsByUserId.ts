import { ObjectId } from 'mongodb';
import { jobInterviewsCollection } from '../../../lib/mongoDBCollections';
import logger from '../../../lib/winstonLogger';

export default function getJobInterviewsByUserId(userId: string) {
  try {
    return jobInterviewsCollection
      .aggregate(
        [
          {
            $match: {
              companyId: new ObjectId(userId),
            },
          },
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
    logger.error('Error retireving job interviews by user id:', error);
    throw new Error(
      'Could not retrieve the job interviews due to an error. Please try again.',
    );
  }
}
