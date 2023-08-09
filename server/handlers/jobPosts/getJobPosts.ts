import { jobPostsCollection } from '../../lib/collections';

export default function getJobPosts() {
  // Find all the job posts.
  return jobPostsCollection
    .aggregate(
      [
        {
          $match: {
            published: true,
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
        {
          $unwind: '$company', // Unwind the "company" array
        },
      ],

      { maxTimeMS: 60000, allowDiskUse: true },
    )
    .toArray();
}
