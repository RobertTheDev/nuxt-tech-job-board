import { ObjectId } from 'mongodb';
import { jobPostsCollection } from '../../../lib/mongoDBCollections';
import getJobPostById from '../../../controllers/jobPost/id/getJobPostById';
import updateJobPostById from '../../../controllers/jobPost/id/updateJobPostById';
import updateJobPostSchema from '@/models/jobPost/validators/updateJobPostSchema';

export default defineEventHandler(async (event) => {
  const { id } = event.context.params as { id: string };
  const { method } = event.node.req;

  if (method === 'GET') {
    try {
      return await getJobPostById(id);
    } catch (error) {
      return error;
    }
  }

  if (method === 'DELETE') {
    try {
      return await jobPostsCollection.findOneAndDelete({
        _id: new ObjectId(id),
      });
    } catch (error) {
      return error;
    }
  }
  if (method === 'PUT') {
    try {
      const body = await readBody(event);

      const validatedBody = await updateJobPostSchema.validate(body);

      return updateJobPostById(id, validatedBody);
    } catch (error) {
      return error;
    }
  }
});
