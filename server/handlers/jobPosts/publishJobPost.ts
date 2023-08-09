import { ObjectId } from 'mongodb';
import { jobPostsCollection } from '../../lib/collections';
import JobPost from '../../../lib/types/JobPost';
import getJobPostById from './getJobPostById';

export default async function publishJobPost(id: string) {
  // Update the job post by its id with the inputted body.

  const { title } = (await getJobPostById(id)) as JobPost;

  if (!title) {
    throw createError({
      statusCode: 404,
      statusMessage: `There are empty fields required to be completed before publishing.`,
    });
  }

  await jobPostsCollection.findOneAndUpdate(
    { _id: new ObjectId(id) },
    {
      $set: {
        published: true,
      },
    },
  );

  // Find and return the updated job post by its id.
  return await getJobPostById(id);
}
