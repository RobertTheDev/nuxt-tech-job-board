import { ObjectId } from 'mongodb';
import { jobOffersCollection } from '../../lib/collections';

export default async function getJobOfferById(id: string) {
  const jobOffer = await jobOffersCollection
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

  return jobOffer[0];
}
