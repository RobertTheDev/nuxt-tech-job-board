import getJobApplicationById from '../../../controllers/jobApplication/id/getJobApplicationById';
import deleteJobApplicationById from '../../../controllers/jobApplication/id/deleteJobApplicationById';
import updateJobApplicationById from '../../../controllers/jobApplication/id/updateJobApplicationById';
import updateJobApplicationSchema from '@/models/jobApplication/validators/updateJobApplicationSchema';

export default defineEventHandler(async (event) => {
  const { id } = event.context.params as { id: string };
  const { method } = event.node.req;

  if (method === 'GET') {
    try {
      return getJobApplicationById(id);
    } catch (error) {
      return error;
    }
  }
  if (method === 'DELETE') {
    try {
      return deleteJobApplicationById(id);
    } catch (error) {
      return error;
    }
  }
  if (method === 'PUT') {
    try {
      const body = await readBody(event);

      const validatedBody = await updateJobApplicationSchema.validate(body);

      return updateJobApplicationById(id, validatedBody);
    } catch (error) {
      return error;
    }
  }
});
