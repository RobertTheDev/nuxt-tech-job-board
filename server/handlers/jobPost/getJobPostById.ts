import { ObjectId } from 'mongodb';
import { jobPostsCollection } from '../../lib/mongoDBCollections';

export default async function getJobPostById(id: string) {
  const jobPost = await jobPostsCollection
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

  return jobPost[0];
}
