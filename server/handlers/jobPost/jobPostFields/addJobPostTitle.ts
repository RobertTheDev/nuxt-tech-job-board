import { ObjectId } from 'mongodb';
import getJobPostById from '../getJobPostById';
import { jobPostsCollection } from '../../../lib/collections';
import { AddTitleSchemaType } from '../../../validators/jobPost/jobPostFieldSchemas/addTitleSchema';

export default async function addJobPostTitle(
  id: string,
  body: AddTitleSchemaType,
) {
  // Update the job post by its id with the inputted body.
  await jobPostsCollection.findOneAndUpdate(
    { _id: new ObjectId(id) },
    { $set: body },
  );

  // Find and return the updated job post by its id.
  return await getJobPostById(id);
}
