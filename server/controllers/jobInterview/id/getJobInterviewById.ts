import { ObjectId } from 'mongodb';
import { jobInterviewsCollection } from '../../../lib/mongoDBCollections';
import logger from '../../../lib/winstonLogger';

export default async function getJobInterviewById(id: string) {
  try {
    const jobInterview = await jobInterviewsCollection
      .aggregate(
        [
          {
            $match: {
              _id: new ObjectId(id),
            },
          },
        ],
        { maxTimeMS: 60000, allowDiskUse: true },
      )
      .toArray();

    return jobInterview[0];
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error retrieving job interviews by user id:', error);
    throw new Error(
      'Could not retrieve the job interviews due to an error. Please try again.',
    );
  }
}
