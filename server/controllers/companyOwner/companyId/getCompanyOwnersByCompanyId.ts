import { ObjectId } from 'mongodb';
import logger from '../../../lib/winstonLogger';
import { companyOwnersCollection } from '../../../lib/mongoDBCollections';

export default async function getCompanyOwnersByCompanyId(companyId: string) {
  try {
    return await companyOwnersCollection
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
    logger.error('Error retrieving company owners by company id:', error);
    throw new Error(
      'Could not retrieve the company owners due to an error. Please try again.',
    );
  }
}
