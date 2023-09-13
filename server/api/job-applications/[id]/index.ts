import updateApplicationSchema from '../../../validators/applications/updateApplicationSchema';
import getApplicationById from '../../../handlers/jobApplications/getApplicationById';
import deleteApplicationById from '../../../handlers/jobApplications/deleteApplicationById';
import updateApplicationById from '../../../handlers/jobApplications/updateApplicationById';
import checkUserSignedIn from '../../../handlers/auth/checkUserSignedIn';

export default defineEventHandler(async (event) => {
  const { id } = event.context.params as { id: string };
  const { method } = event.node.req;
  const { user } = event.context.session;

  if (method === 'GET') {
    try {
      return getApplicationById(id);
    } catch (error) {
      return error;
    }
  }
  if (method === 'DELETE') {
    try {
      checkUserSignedIn(user);
      return deleteApplicationById(id);
    } catch (error) {
      return error;
    }
  }
  if (method === 'PUT') {
    try {
      checkUserSignedIn(user);

      const body = await readBody(event);

      const validatedBody = await updateApplicationSchema.validate(body);

      return updateApplicationById(id, validatedBody);
    } catch (error) {
      return error;
    }
  }
});
