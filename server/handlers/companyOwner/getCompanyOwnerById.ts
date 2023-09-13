import { ObjectId } from 'mongodb';
import { companyOwnersCollection } from '../../lib/collections';

export default async function getCompanyOwnerById(id: string) {
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
}
