import { applicationsCollection } from '../../lib/collections';
import { CreateApplicationSchemaType } from '../../validators/applications/createApplicationSchema';
import getApplicationById from './getApplicationById';

export default async function createApplication(
  body: CreateApplicationSchemaType,
) {
  // Create an application.
  const createdApplication = await applicationsCollection.insertOne(body);

  // Find and return the created application.
  return await getApplicationById(createdApplication.insertedId.toString());
}
