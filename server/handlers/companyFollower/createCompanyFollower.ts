import { ObjectId } from 'mongodb';
import { CreateCompanyFollowerSchemaType } from '../../validators/companyFollowers/createCompanyFollowerSchema';
import { companyFollowersCollection } from '../../lib/collections';
import getCompanyFollowerById from './getCompanyFollowerById';

// This handler creates and inserts a new company follower.

export default async function createCompanyFollower(
  body: CreateCompanyFollowerSchemaType,
) {
  // Get the fields from the validated body.
  const { createdAt, userId, companyId } = body;

  // Create company follower with signed in user's id and company id.
  const createdCompanyFollower = await companyFollowersCollection.insertOne({
    createdAt,
    companyId: new ObjectId(companyId),
    userId: new ObjectId(userId),
  });

  // Retrurn the created company follower by its id.
  return await getCompanyFollowerById(
    createdCompanyFollower.insertedId.toString(),
  );
}
