import { ObjectId } from 'mongodb';
import { UpdateJobOfferSchemaType } from '../../validators/jobOffers/updateJobOfferSchema';
import { jobOffersCollection } from '../../lib/collections';
import getJobOfferById from './getJobOfferById';

export default async function updateJobOfferById(
  id: string,
  body: UpdateJobOfferSchemaType,
) {
  // Update the job offer by its id with the inputted body.
  await jobOffersCollection.findOneAndUpdate(
    { _id: new ObjectId(id) },
    { $set: { updatedAt: new Date(), body } },
  );

  // Find and return the updated job offer by its id.
  return await getJobOfferById(id);
}
