import { ObjectId } from 'mongodb';
import { jobOffersCollection } from '../../lib/collections';

export default function getJobOffersByJobPostId(jobPostId: string) {
  // Find all the job offers by their job post id.
  return jobOffersCollection
    .aggregate(
      [
        {
          $match: {
            jobPostId: new ObjectId(jobPostId),
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
