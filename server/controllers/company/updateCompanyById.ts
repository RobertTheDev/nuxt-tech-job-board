import { Document, ObjectId } from 'mongodb';
import updateCompanySchema from '../../validators/company/updateCompanySchema';
import { companiesCollection } from '../../lib/mongoDBCollections';
import logger from '../../lib/winstonLogger';
import getCompanyById from './getCompanyById';

// This handler updates and returns the company by id.

export default async function updateCompanyById(
  id: string,
  body: any,
): Promise<Document | null> {
  try {
    // Validated the body
    const validatedBody = await updateCompanySchema.validate(body);

    // Update the company by its id with the inputted body.
    await companiesCollection.findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: validatedBody },
    );

    // Find and return the updated company by its id.
    return await getCompanyById(id);
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error updating the company by id:', error);
    throw new Error(
      'Could not update the company due to an error. Please try again.',
    );
  }
}
