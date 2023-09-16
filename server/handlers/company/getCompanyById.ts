import { ObjectId } from 'mongodb';
import { companiesCollection } from '../../lib/mongoDBCollections';

export default async function getCompanyById(id: string) {
  const company = await companiesCollection
    .aggregate(
      [
        {
          $match: {
            _id: new ObjectId(id),
          },
        },
        {
          $lookup: {
            from: 'jobPosts',
            localField: '_id',
            foreignField: 'companyId',
            as: 'jobPosts',
          },
        },
        {
          $lookup: {
            from: 'companyOwners',
            localField: '_id',
            foreignField: 'companyId',
            as: 'findCompanyOwners',
          },
        },
        { $unwind: { path: '$findCompanyOwners' } },
        {
          $lookup: {
            from: 'users',
            localField: 'findCompanyOwners.userId',
            foreignField: '_id',
            as: 'owners',
          },
        },
      ],
      { maxTimeMS: 60000, allowDiskUse: true },
    )
    .toArray();

  if (!company) {
    throw createError({
      statusCode: 404,
      statusMessage: `No company with id ${id} was found.`,
    });
  }

  return company[0];
}
