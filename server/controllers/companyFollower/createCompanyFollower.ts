import { Document, ObjectId } from 'mongodb';
import logger from '../../lib/winstonLogger';
import { companyFollowersCollection } from '../../lib/mongoDBCollections';
import getCompanyFollowerById from './id/getCompanyFollowerById';

// This handler creates and inserts a new company follower.

export default async function createCompanyFollower(
  userId: string,
  companyId: string,
): Promise<Document | null> {
  try {
    // Create company follower with signed in user's id and company id.
    const createdCompanyFollower = await companyFollowersCollection.insertOne({
      createdAt: new Date(),
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
