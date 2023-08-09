import { ObjectId } from 'mongodb';
import getJobPostById from '../getJobPostById';
import { jobPostsCollection } from '../../../lib/collections';
import { AddDescriptionSchemaType } from '../../../validators/jobPosts/jobPostFieldSchemas/addDescriptionSchema';

export default async function addJobPostDescription(
  id: string,
  body: AddDescriptionSchemaType,
) {
  // Update the job post by its id with the inputted body.
  await jobPostsCollection.findOneAndUpdate(
    { _id: new ObjectId(id) },
    { $set: body },
  );

  // Find and return the updated job post by its id.
  return await getJobPostById(id);
}
