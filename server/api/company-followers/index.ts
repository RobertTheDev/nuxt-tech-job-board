import { companyFollowersCollection } from '../../lib/collections';
import deleteCompanyFollowers from '../../handlers/companyFollower/deleteCompanyFollowers';

export default defineEventHandler((event) => {
  const { method } = event.node.req;

  if (method === 'GET') {
    try {
      return companyFollowersCollection
        .aggregate(
          [
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
    } catch (error) {
      return error;
    }
  }
  if (method === 'DELETE') {
    try {
      return deleteCompanyFollowers();
    } catch (error) {
      return error;
    }
  }
});
