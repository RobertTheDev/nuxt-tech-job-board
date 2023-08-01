import { companyOwnersCollection } from '../../lib/collections';

export default function getCompanyOwners() {
  return companyOwnersCollection
    .aggregate(
      [
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
}
