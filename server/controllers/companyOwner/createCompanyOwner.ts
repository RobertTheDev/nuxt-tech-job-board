import { Document, ObjectId } from 'mongodb';
import logger from '../../lib/winstonLogger';
import { companyOwnersCollection } from '../../lib/mongoDBCollections';
import getCompanyOwnerById from './id/getCompanyOwnerById';

// This handler creates and inserts a new company.

export default async function createCompanyOwner(
  companyId: string,
  userId: string,
): Promise<Document | null> {
  try {
    // Create the company owner.
    const createdCompanyOwner = await companyOwnersCollection.insertOne({
      createdAt: new Date(),
      companyId: new ObjectId(companyId),
      userId: new ObjectId(userId),
    });

    // Get the created company owner by its id.
    return await getCompanyOwnerById(createdCompanyOwner.insertedId.toString());
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error creating company owner:', error);
    throw new Error(
      'Could not create the company owner due to an error. Please try again.',
    );
  }
}
