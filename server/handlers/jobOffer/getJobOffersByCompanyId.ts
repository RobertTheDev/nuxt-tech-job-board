import { ObjectId } from 'mongodb';
import { jobOffersCollection } from '../../lib/collections';

export default function getJobOffersByCompanyId(companyId: string) {
  // Find all the job offers by their company id.
  return jobOffersCollection
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
        {
          $unwind: '$company', // Unwind the "company" array
        },
      ],

      { maxTimeMS: 60000, allowDiskUse: true },
    )
    .toArray();
}
