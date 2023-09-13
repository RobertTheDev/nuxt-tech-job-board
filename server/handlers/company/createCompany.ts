import { ObjectId } from 'mongodb';
import {
  companiesCollection,
  companyOwnersCollection,
} from '../../lib/collections';
import { CreateCompanySchemaType } from '../../validators/companies/createCompanySchema';
import createCompanyOwnerSchema from '../../validators/companyOwners/createCompanyOwnerSchema';
import getCompanyById from './getCompanyById';

export default async function createCompany(
  userId: string,
  body: CreateCompanySchemaType,
) {
  // Create the company.
  const createdCompany = await companiesCollection.insertOne(body);

  const createdCompanyOwnerBody = {
    userId: new ObjectId(userId),
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
}
