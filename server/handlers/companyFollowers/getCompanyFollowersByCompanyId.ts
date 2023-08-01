import { ObjectId } from 'mongodb';
import { companyFollowersCollection } from '../../lib/collections';

export default async function getCompanyFollowersByCompanyId(
  companyId: string,
) {
  return await companyFollowersCollection
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
            localField: 'userId',
            foreignField: '_id',
            as: 'user',
          },
        },
        { $unwind: { path: '$user' } },
        {
          $project: {
            user: {
              password: 0,
            },
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
        { $unwind: { path: '$company' } },
      ],
      { maxTimeMS: 60000, allowDiskUse: true },
    )
    .toArray();
}
