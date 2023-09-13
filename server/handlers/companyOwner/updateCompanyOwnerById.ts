import { ObjectId } from 'mongodb';
import { UpdateCompanyOwnerSchemaType } from '../../validators/companyOwners/updateCompanyOwnerSchema';
import { companyOwnersCollection } from '../../lib/collections';
import getCompanyOwnerById from './getCompanyOwnerById';

export default async function updateCompanyOwnerById(
  id: string,
  body: UpdateCompanyOwnerSchemaType,
) {
  // Update the company owner by its id with the inputted body.
  await companyOwnersCollection.findOneAndUpdate(
    { _id: new ObjectId(id) },
    { $set: { updatedAt: new Date(), body } },
  );

  // Find and return the updated company owner by its id.
  return await getCompanyOwnerById(id);
}
