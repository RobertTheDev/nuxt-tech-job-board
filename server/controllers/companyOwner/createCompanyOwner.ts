import { Document } from 'mongodb';
import logger from '../../lib/winstonLogger';
import { companyOwnersCollection } from '../../lib/mongoDBCollections';
import createCompanyOwnerSchema from '../../validators/companyOwner/createCompanyOwnerSchema';
import getCompanyOwnerById from './getCompanyOwnerById';

// This handler creates and inserts a new company.

export default async function createCompanyOwner(
  body: any,
): Promise<Document | null> {
  try {
    // Validate the body.
    const validatedBody = await createCompanyOwnerSchema.validate(body);

    // Create the company owner.
    const createdCompanyOwner = await companyOwnersCollection.insertOne(
      validatedBody,
    );

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
