import { ObjectId } from 'mongodb';
import getJobPostById from '../getJobPostById';
import { jobPostsCollection } from '../../../lib/mongoDBCollections';
import { AddLocationSchemaType } from '../../../validators/jobPost/jobPostFieldSchemas/addLocationSchema';

export default async function addJobPostLocation(
  id: string,
  body: AddLocationSchemaType,
) {
  // Update the job post by its id with the inputted body.
  await jobPostsCollection.findOneAndUpdate(
    { _id: new ObjectId(id) },
    { $set: body },
  );

  // Find and return the updated job post by its id.
  return await getJobPostById(id);
}
