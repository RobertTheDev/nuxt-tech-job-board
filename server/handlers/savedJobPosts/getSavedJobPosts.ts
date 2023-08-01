import { savedJobPostsCollection } from '../../lib/collections';

export default function getSavedJobPosts() {
  return savedJobPostsCollection
    .aggregate(
      [
        {
          $lookup: {
            from: 'companies',
            localField: 'companies._id',
            foreignField: 'savedJobPosts.companyId',
            as: 'company',
          },
        },
        { $unwind: { path: '$company' } },
        {
          $lookup: {
            from: 'users',
            localField: 'users._id',
            foreignField: 'savedJobPosts.userId',
            as: 'user',
          },
        },
      ],

      { maxTimeMS: 60000, allowDiskUse: true },
    )
    .toArray();
}
