import { ObjectId } from 'mongodb';
import { companyOwnersCollection } from '../../lib/collections';

export default async function getCompanyOwnersByCompanyId(companyId: string) {
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
}
