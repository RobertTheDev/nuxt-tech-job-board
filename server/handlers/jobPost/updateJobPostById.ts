import { ObjectId } from 'mongodb';
import { UpdateJobPostSchemaType } from '../../validators/jobPost/updateJobPostSchema';
import { jobPostsCollection } from '../../lib/mongoDBCollections';
import getJobPostById from './getJobPostById';

export default async function updateJobPostById(
  id: string,
  body: UpdateJobPostSchemaType,
) {
  // Update the job post by its id with the inputted body.
  await jobPostsCollection.findOneAndUpdate(
    { _id: new ObjectId(id) },
    { $set: body },
  );

  // Find and return the updated job post by its id.
  return await getJobPostById(id);
}
