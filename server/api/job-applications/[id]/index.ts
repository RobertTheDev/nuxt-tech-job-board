import updateApplicationSchema from '../../../validators/jobApplication/updateJobApplicationSchema';
import checkUserSignedIn from '../../../handlers/auth/checkUserSignedIn';
import getJobApplicationById from '../../..//handlers/jobApplication/getJobApplicationById';
import deleteJobApplicationById from '../../../handlers/jobApplication/deleteJobApplicationById';
import updateJobApplicationById from '../../../handlers/jobApplication/updateJobApplicationById';

export default defineEventHandler(async (event) => {
  const { id } = event.context.params as { id: string };
  const { method } = event.node.req;
  const { user } = event.context.session;

  if (method === 'GET') {
    try {
      return getJobApplicationById(id);
    } catch (error) {
      return error;
    }
  }
  if (method === 'DELETE') {
    try {
      checkUserSignedIn(user);
      return deleteJobApplicationById(id);
    } catch (error) {
      return error;
    }
  }
  if (method === 'PUT') {
    try {
      checkUserSignedIn(user);

      const body = await readBody(event);

      const validatedBody = await updateApplicationSchema.validate(body);

      return updateJobApplicationById(id, validatedBody);
    } catch (error) {
      return error;
    }
  }
});
