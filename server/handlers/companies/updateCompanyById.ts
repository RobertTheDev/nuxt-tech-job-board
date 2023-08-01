import { ObjectId } from 'mongodb';
import { UpdateCompanySchemaType } from '../../validators/companies/updateCompanySchema';
import { companiesCollection } from '../../lib/collections';
import getCompanyById from './getCompanyById';

export default async function updateCompanyById(
  id: string,
  body: UpdateCompanySchemaType,
) {
  // Update the company by its id with the inputted body.
  await companiesCollection.findOneAndUpdate(
    { _id: new ObjectId(id) },
    { $set: body },
  );

  // Find and return the updated company by its id.
  return await getCompanyById(id);
}
