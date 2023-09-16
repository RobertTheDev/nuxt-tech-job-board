import { companyOwnersCollection } from '../../lib/mongoDBCollections';

export default function getCompanyOwners() {
  return companyOwnersCollection
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
}
