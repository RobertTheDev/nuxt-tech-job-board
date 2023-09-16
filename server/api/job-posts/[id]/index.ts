import { ObjectId } from 'mongodb';
import { jobPostsCollection } from '../../../lib/mongoDBCollections';
import getJobPostById from '../../../handlers/jobPost/getJobPostById';
import updateJobPostById from '../../../handlers/jobPost/updateJobPostById';
import checkUserSignedIn from '../../../handlers/auth/checkUserSignedIn';
import updateJobPostSchema from '../../../validators/jobPost/updateJobPostSchema';

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

      const validatedBody = await updateJobPostSchema.validate(body);

      return updateJobPostById(id, validatedBody);
    } catch (error) {
      return error;
    }
  }
});
