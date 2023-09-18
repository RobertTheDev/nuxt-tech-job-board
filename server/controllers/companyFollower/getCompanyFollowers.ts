import { Document } from 'mongodb';
import { companyFollowersCollection } from '../../lib/mongoDBCollections';
import logger from '../../lib/winstonLogger';

// This handler finds and returns all the app's company followers from mongoDB.

export default async function getCompanyFollowers(): Promise<Document[]> {
  try {
    // Finds and returns all the app's company followers from mongoDB.
    return await companyFollowersCollection
      .aggregate(
        [
          // Get the company follower's related user.
          {
            $lookup: {
              from: 'users',
              localField: 'userId',
              foreignField: '_id',
              as: 'user',
            },
          },
          // Return a single user not an array.
          { $unwind: { path: '$user' } },
          // Remove the password field.
          {
            $project: {
              user: {
                password: 0,
              },
            },
          },
          // Get the company follower's related company.
          {
            $lookup: {
              from: 'companies',
              localField: 'companyId',
              foreignField: '_id',
              as: 'company',
            },
          },
          // Return a single company not an array.
          { $unwind: { path: '$company' } },
        ],
        // Define fetch settings.
        { maxTimeMS: 60000, allowDiskUse: true },
      )
      .toArray();
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error retrieving company followers:', error);
    throw new Error(
      'Could not retrieve company followers due to an error. Please try again.',
    );
  }
}
