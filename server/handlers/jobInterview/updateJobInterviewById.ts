import { ObjectId } from 'mongodb';
import { jobInterviewsCollection } from '../../lib/mongoDBCollections';
import { UpdateJobInterviewSchemaType } from '../../validators/jobInterview/updateJobInterviewSchema';
import getJobInterviewById from './getJobInterviewById';

export default async function updateJobPostById(
  id: string,
  body: UpdateJobInterviewSchemaType,
) {
  // Update the job interview by its id with the inputted body.
  await jobInterviewsCollection.findOneAndUpdate(
    { _id: new ObjectId(id) },
    { $set: { updatedAt: new Date(), body } },
  );

  // Find and return the updated job interview by its id.
  return await getJobInterviewById(id);
}
