import { jobApplicationsCollection } from '../../lib/collections';
import { CreateJobApplicationSchemaType } from '../../validators/jobApplication/createJobApplicationSchema';
import getJobApplicationById from './getJobApplicationById';

export default async function createJobApplication(
  body: CreateJobApplicationSchemaType,
) {
  // Create a job application.
  const createdApplication = await jobApplicationsCollection.insertOne(body);

  // Find and return the created job application.
  return await getJobApplicationById(createdApplication.insertedId.toString());
}
