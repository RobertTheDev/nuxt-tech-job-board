import { ObjectId } from 'mongodb';
import { companyOwnersCollection } from '../../lib/collections';

export default async function getCompanyOwnersByUserId(userId: string) {
  return await companyOwnersCollection
    .aggregate(
      [
        {
          $match: {
            userId: new ObjectId(userId),
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
}
