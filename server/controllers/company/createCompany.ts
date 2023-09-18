import { Document, ObjectId } from 'mongodb';
import logger from '../../lib/winstonLogger';
import {
  companiesCollection,
  companyOwnersCollection,
} from '../../lib/mongoDBCollections';
import createCompanySchema from '../../validators/company/createCompanySchema';
import createCompanyOwnerSchema from '../../validators/companyOwner/createCompanyOwnerSchema';
import getCompanyById from './getCompanyById';
import User from '@/models/user/types/User';

// This handler creates and inserts a new notification.

export default async function createCompany(
  body: any,
  user: User,
): Promise<Document | null> {
  try {
    // Validated the body.
    const validatedBody = await createCompanySchema.validate(body);

    // Create the company.
    const createdCompany = await companiesCollection.insertOne(validatedBody);

    const createdCompanyOwnerBody = {
      userId: new ObjectId(user._id),
      companyId: new ObjectId(createdCompany.insertedId.toString()),
    };

    const validatedCreatedCompanyOwnerBody =
      await createCompanyOwnerSchema.validate(createdCompanyOwnerBody);

    // Create the company's owner.

    await companyOwnersCollection.insertOne({
      companyId: new ObjectId(validatedCreatedCompanyOwnerBody.companyId),
      userId: new ObjectId(validatedCreatedCompanyOwnerBody.userId),
    });

    // Return the created company by its id.
    return await getCompanyById(createdCompany.insertedId.toString());
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error creating company:', error);
    throw new Error(
      'Could not create the company due to an error. Please try again.',
    );
  }
}
