import { ObjectId } from 'mongodb';
import { CreateCompanyFollowerSchemaType } from '../../validators/companyFollowers/createCompanyFollowerSchema';
import { companyFollowersCollection } from '../../lib/collections';
import getCompanyFollowerById from './getCompanyFollowerById';

export default async function createCompanyFollower(
  body: CreateCompanyFollowerSchemaType,
) {
  // Create the company follower.
  const createdCompanyFollower = await companyFollowersCollection.insertOne({
    companyId: new ObjectId(body.companyId),
    userId: new ObjectId(body.userId),
  });

  // Get the created company follower by its id.
  return await getCompanyFollowerById(
    createdCompanyFollower.insertedId.toString(),
  );
}
