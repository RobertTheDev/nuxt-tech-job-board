import { Document } from 'mongodb';
import { companyOwnersCollection } from '../../lib/mongoDBCollections';
import logger from '../../lib/winstonLogger';

// This handler finds and returns all the app's company owners from mongoDB.

export default async function getCompanyOwners(): Promise<Document[]> {
  try {
    // Finds and returns all the app's company owners from mongoDB.
    return await companyOwnersCollection
      .aggregate(
        [
          {
            $lookup: {
              from: 'companies',
              localField: 'companyId',
              foreignField: '_id',
              as: 'company',
            },
          },
          {
            $lookup: {
              from: 'users',
              foreignField: '_id',
              localField: 'userId',
              as: 'owners',
            },
          },
          { $unwind: { path: '$company' } },
        ],

        { maxTimeMS: 60000, allowDiskUse: true },
      )
      .toArray();
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error retrieving company owners:', error);
    throw new Error(
      'Could not retrieve company owners due to an error. Please try again.',
    );
  }
}
