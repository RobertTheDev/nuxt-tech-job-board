import { jobOffersCollection } from '../../lib/collections';
import { CreateJobPostSchemaType } from '../../validators/jobPost/createJobPostSchema';
import getJobOfferById from './getJobOfferById';

export default async function createJobOffer(body: CreateJobPostSchemaType) {
  // Create the job offer.
  const createdJobOffer = await jobOffersCollection.insertOne({
    createdAt: new Date(),
    body,
  });

  // Find and return the created job offer by its id.
  return await getJobOfferById(createdJobOffer.insertedId.toString());
}
