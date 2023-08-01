import { ObjectId } from 'mongodb';
import { companyOwnersCollection } from '../../lib/collections';
import { CreateCompanyFollowerSchemaType } from '../../validators/companyFollowers/createCompanyFollowerSchema';
import getCompanyFollowerById from './getCompanyFollowerById';

export default async function createCompanyFollower({
  companyId,
  userId,
}: CreateCompanyFollowerSchemaType) {
  // Create the company follower.
  const createdCompanyFollower = await companyOwnersCollection.insertOne({
    createdAt: new Date(),
    companyId: new ObjectId(companyId),
    userId: new ObjectId(userId),
  });

  // Get the created company follower by its id.
  return await getCompanyFollowerById(
    createdCompanyFollower.insertedId.toString(),
  );
}
