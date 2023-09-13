import { jobOffersCollection } from '../../lib/collections';

export default function getJobOffers() {
  // Find all the job offers.
  return jobOffersCollection
    .aggregate(
      [
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
