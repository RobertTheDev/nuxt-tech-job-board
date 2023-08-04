import { ObjectId } from 'mongodb';
import { companyOwnersCollection } from '../../lib/collections';
import { CreateCompanyFollowerSchemaType } from '../../validators/companyFollowers/createCompanyFollowerSchema';
import getCompanyFollowerById from './getCompanyFollowerById';

export default async function createCompanyFollower(
  body: CreateCompanyFollowerSchemaType,
) {
  // Create the company follower.
  const createdCompanyFollower = await companyOwnersCollection.insertOne({
    createdAt: body.createdAt,
    companyId: new ObjectId(body.companyId),
    userId: new ObjectId(body.userId),
  });

  // Get the created company follower by its id.
  return await getCompanyFollowerById(
    createdCompanyFollower.insertedId.toString(),
  );
}
