import { Document, ObjectId } from 'mongodb';
import { companyOwnersCollection } from '../../../lib/mongoDBCollections';
import logger from '../../../lib/winstonLogger';

export default async function getCompanyOwnerById(
  id: string,
): Promise<Document | null> {
  try {
    const companyOwner = await companyOwnersCollection
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
              foreignField: 'companyOwners.companyId',
              as: 'company',
            },
          },
          { $unwind: { path: '$company' } },
          {
            $lookup: {
              from: 'users',
              localField: 'userId',
              foreignField: '_id',
              as: 'owners',
            },
          },
        ],

        { maxTimeMS: 60000, allowDiskUse: true },
      )
      .toArray();

    return companyOwner[0];
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error retrieving company owner by id:', error);
    throw new Error(
      'Could not retrieve company owner by id due to an error. Please try again.',
    );
  }
}
