import { ObjectId } from 'mongodb';
import { UpdateCompanyFollowerSchemaType } from '../../validators/companyFollowers/updateCompanyFollowerSchema';
import { companyFollowersCollection } from '../../lib/collections';
import getCompanyFollowerById from './getCompanyFollowerById';

export default async function updateCompanyFollowerById(
  id: string,
  body: UpdateCompanyFollowerSchemaType,
) {
  // Update the company follower by its id with the inputted body.
  await companyFollowersCollection.findOneAndUpdate(
    { _id: new ObjectId(id) },
    { $set: { updatedAt: new Date(), body } },
  );

  // Find and return the updated company follower by its id.
  return await getCompanyFollowerById(id);
}
