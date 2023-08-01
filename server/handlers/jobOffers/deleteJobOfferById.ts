import { ObjectId } from 'mongodb';
import { jobOffersCollection } from '../../lib/collections';

export default async function deleteJobOfferById(id: string) {
  // Find and delete the job offer by its id.
  return await jobOffersCollection.findOneAndDelete({ _id: new ObjectId(id) });
}
