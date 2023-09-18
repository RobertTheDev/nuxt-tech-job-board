import { Document, ObjectId } from 'mongodb';
import updateCompanyOwnerSchema from '../../validators/companyOwner/updateCompanyOwnerSchema';
import { companyOwnersCollection } from '../../lib/mongoDBCollections';
import logger from '../../lib/winstonLogger';
import getCompanyOwnerById from './getCompanyOwnerById';

// This handler updates and returns the company onwer by id.

export default async function updateCompanyOwnerById(
  id: string,
  body: any,
): Promise<Document | null> {
  try {
    // Validate the body.
    const validatedBody = await updateCompanyOwnerSchema.validate(body);

    // Update the company owner by its id with the inputted body.
    await companyOwnersCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { validatedBody } },
    );

    // Find and return the updated company owner by its id.
    return await getCompanyOwnerById(id);
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error updating company owner by id:', error);
    throw new Error(
      'Could not update the company owner due to an error. Please try again.',
    );
  }
}
