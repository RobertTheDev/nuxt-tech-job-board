import { ObjectId } from 'mongodb';
import { jobPostsCollection } from '../../../lib/collections';
import getJobPostById from '../../../handlers/jobPosts/getJobPostById';
import updateJobPostById from '../../../handlers/jobPosts/updateJobPostById';
import checkUserSignedIn from '../../../handlers/auth/checkUserSignedIn';

export default defineEventHandler(async (event) => {
  const { id } = event.context.params as { id: string };
  const { method } = event.node.req;
  const { user } = event.context.session;

  if (method === 'GET') {
    try {
      return await getJobPostById(id);
    } catch (error) {
      return error;
    }
  }

  if (method === 'DELETE') {
    try {
      checkUserSignedIn(user);

      return await jobPostsCollection.findOneAndDelete({
        _id: new ObjectId(id),
      });
    } catch (error) {
      return error;
    }
  }
  if (method === 'PUT') {
    try {
      checkUserSignedIn(user);

      const body = await readBody(event);

      return updateJobPostById(id, body);
    } catch (error) {
      return error;
    }
  }
});
