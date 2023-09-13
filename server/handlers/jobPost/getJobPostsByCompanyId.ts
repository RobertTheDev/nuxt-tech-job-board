import { ObjectId } from 'mongodb';
import { jobPostsCollection } from '../../lib/collections';

export default async function getJobPostsByCompanyId(companyId: string) {
  return await jobPostsCollection
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
            localField: 'companies._id',
            foreignField: 'jobPosts.companyId',
            as: 'company',
          },
        },
      ],
      { maxTimeMS: 60000, allowDiskUse: true },
    )
    .toArray();
}
