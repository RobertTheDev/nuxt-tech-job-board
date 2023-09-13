import { ObjectId } from 'mongodb';
import { jobOffersCollection } from '../../lib/collections';

export default function getJobOffersByUserId(userId: string) {
  // Find all the job offers by their user id.
  return jobOffersCollection
    .aggregate(
      [
        {
          $match: {
            userId: new ObjectId(userId),
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
