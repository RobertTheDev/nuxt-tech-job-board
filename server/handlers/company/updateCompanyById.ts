import { ObjectId } from 'mongodb';
import updateCompanySchema from '../../validators/company/updateCompanySchema';
import { companiesCollection } from '../../lib/mongoDBCollections';
import getCompanyById from './getCompanyById';

export default async function updateCompanyById(id: string, body: any) {
  // Validated the body
  const validatedBody = await updateCompanySchema.validate(body);

  // Update the company by its id with the inputted body.
  await companiesCollection.findOneAndUpdate(
    { _id: new ObjectId(id) },
    { $set: validatedBody },
  );

  // Find and return the updated company by its id.
  return await getCompanyById(id);
}
