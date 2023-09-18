import { ObjectId } from 'mongodb';
import { companyFollowersCollection } from '../../../lib/mongoDBCollections';
import logger from '../../../lib/winstonLogger';

// This handler finds and returns all company followers by their matching company id.
// This handler lookups related company and user from their collections.

export default async function getCompanyFollowersByCompanyId(
  companyId: string,
) {
  try {
    // Get the company followers by their matching company id.
    return await companyFollowersCollection
      .aggregate(
        [
          // Get the company followers by their matching company id.
          {
            $match: {
              companyId: new ObjectId(companyId),
            },
          },
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
    logger.error('Error retrieving company followers by company id:', error);
    throw new Error(
      'Could not retrieve the company followers due to an error. Please try again.',
    );
  }
}
