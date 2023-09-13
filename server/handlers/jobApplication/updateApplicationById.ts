import { ObjectId } from 'mongodb';
import { UpdateApplicationSchemaType } from '../../validators/application/updateApplicationSchema';
import { applicationsCollection } from '../../lib/collections';
import getApplicationById from './getApplicationById';

export default async function updateApplicationById(
  id: string,
  body: UpdateApplicationSchemaType,
) {
  // Update the application by its id with the inputted body.
  await applicationsCollection.findOneAndUpdate(
    { _id: new ObjectId(id) },
    { $set: body },
  );

  // Find and return the updated application by its id.
  return await getApplicationById(id);
}
