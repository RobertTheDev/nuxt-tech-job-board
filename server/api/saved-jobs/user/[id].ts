import updateUserSchema from '../../../validators/users/updateUserSchema';
import updateUserById from '../../../handlers/users/updateUserById';
import getSavedJobPostById from '../../../handlers/savedJobPosts/getSavedJobPostById';
import deleteSavedJobById from '../../../handlers/savedJobPosts/deleteSavedJobPostById';
import checkUserSignedIn from '../../../handlers/auth/checkUserSignedIn';

export default defineEventHandler(async (event) => {
  const { id } = event.context.params as { id: string };
  const { user } = event.context.session;
  const { method } = event.node.req;

  if (method === 'GET') {
    try {
      return getSavedJobPostById(id);
    } catch (error) {
      return error;
    }
  }
  if (method === 'DELETE') {
    try {
      checkUserSignedIn(user);

      return deleteSavedJobById(id);
    } catch (error) {
      return error;
    }
  }
  if (method === 'PUT') {
    try {
      checkUserSignedIn(user);

      const body = await readBody(event);

      const validatedBody = await updateUserSchema.validate(body);

      return updateUserById(id, validatedBody);
    } catch (error) {
      return error;
    }
  }
});
