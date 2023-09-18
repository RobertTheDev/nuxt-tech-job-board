import { Document, ObjectId } from 'mongodb';
import logger from '../../lib/winstonLogger';
import createCompanyFollowerSchema from '../../validators/companyFollower/createCompanyFollowerSchema';
import { companyFollowersCollection } from '../../lib/mongoDBCollections';
import getCompanyFollowerById from './getCompanyFollowerById';

// This handler creates and inserts a new company follower.

export default async function createCompanyFollower(
  body: any,
): Promise<Document | null> {
  try {
    // Validate the body.
    const validatedBody = await createCompanyFollowerSchema.validate(body);

    // Get the fields from the validated body.
    const { createdAt, userId, companyId } = validatedBody;

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
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error creating company follower:', error);
    throw new Error(
      'Could not follow the company due to an error. Please try again.',
    );
  }
}
