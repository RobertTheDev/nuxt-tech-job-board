import { jobPostsCollection } from '../../lib/mongoDBCollections';
import { CreateJobPostSchemaType } from '../../validators/jobPost/createJobPostSchema';
import getJobPostById from './getJobPostById';

export default async function createJobPost(body: CreateJobPostSchemaType) {
  // Create the job post.
  const createdJobPost = await jobPostsCollection.insertOne(body);

  // Find and return the created job post by its id.
  return await getJobPostById(createdJobPost.insertedId.toString());
}
