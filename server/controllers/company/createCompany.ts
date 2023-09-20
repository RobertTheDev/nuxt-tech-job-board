import { ObjectId } from 'mongodb';
import logger from '../../lib/winstonLogger';
import {
  companiesCollection,
  companyOwnersCollection,
} from '../../lib/mongoDBCollections';
import getCompanyById from './id/getCompanyById';
import User from '@/models/user/types/User';
import createCompanySchema from '@/models/company/validators/createCompanySchema';
import createCompanyOwnerSchema from '@/models/companyOwner/validators/createCompanyOwnerSchema';
import Company from '@/models/company/types/Company';

// This handler creates and inserts a new notification.

export default async function createCompany(
  body: any,
  user: User,
): Promise<Company | null> {
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
    // Rethrow the error to be handled elsewhere if needed
    throw error;
  }
}
