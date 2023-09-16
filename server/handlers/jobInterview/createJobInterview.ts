import { jobInterviewsCollection } from '../../lib/mongoDBCollections';
import { CreateJobInterviewSchemaType } from '../../validators/jobInterview/createJobInterviewSchema';
import getJobInterviewById from './getJobInterviewById';

export default async function createJobInterview(
  body: CreateJobInterviewSchemaType,
) {
  // Create the job interview.
  const createdJobInterview = await jobInterviewsCollection.insertOne({
    createdAt: new Date(),
    body,
  });

  // Find and return the created job interview by its id.
  return await getJobInterviewById(createdJobInterview.insertedId.toString());
}
