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
            from: 'users',
            localField: 'users._id',
            foreignField: 'companyOwners.userId',
            as: 'owner',
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
      ],
      { maxTimeMS: 60000, allowDiskUse: true },
    )
    .toArray();
}
