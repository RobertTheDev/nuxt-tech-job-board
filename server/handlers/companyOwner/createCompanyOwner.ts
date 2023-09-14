import { companyOwnersCollection } from '../../lib/collections';
import { CreateCompanyOwnerSchemaType } from '../../validators/companyOwner/createCompanyOwnerSchema';
import getCompanyOwnerById from './getCompanyOwnerById';

export default async function createCompanyOwner(
  body: CreateCompanyOwnerSchemaType,
) {
  // Create the company owner.
  const createdCompanyOwner = await companyOwnersCollection.insertOne(body);

  // Get the created company owner by its id.
  return await getCompanyOwnerById(createdCompanyOwner.insertedId.toString());
}
