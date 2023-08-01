import { ObjectId } from 'mongodb';
import { UpdateJobPostSchemaType } from '../../validators/jobPosts/updateJobPostSchema';
import { jobPostsCollection } from '../../lib/collections';
import getJobPostById from './getJobPostById';

export default async function updateJobPostById(
  id: string,
  body: UpdateJobPostSchemaType,
) {
  // Update the job post by its id with the inputted body.
  await jobPostsCollection.findOneAndUpdate(
    { _id: new ObjectId(id) },
    { $set: { updatedAt: new Date(), body } },
  );

  // Find and return the updated job post by its id.
  return await getJobPostById(id);
}
