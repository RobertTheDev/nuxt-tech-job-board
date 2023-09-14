import checkUserSignedIn from '../../../handlers/auth/checkUserSignedIn';
import deleteCandidateById from '../../../handlers/candidate/deleteCandidateById';
import getCandidateById from '../../../handlers/candidate/getCandidateById';
import updateCandidateById from '../../../handlers/candidate/updateCandidateById';
import updateCandidateSchema from '../../../validators/candidate/updateCandidateSchema';

export default defineEventHandler(async (event) => {
  const { id } = event.context.params as { id: string };
  const { method } = event.node.req;
  const { user } = event.context.session;

  if (method === 'GET') {
    try {
      return getCandidateById(id);
    } catch (error) {
      return error;
    }
  }
  if (method === 'DELETE') {
    try {
      checkUserSignedIn(user);
      return deleteCandidateById(id);
    } catch (error) {
      return error;
    }
  }
  if (method === 'PUT') {
    try {
      checkUserSignedIn(user);

      const body = await readBody(event);

      const validatedBody = await updateCandidateSchema.validate(body);

      return updateCandidateById(id, validatedBody);
    } catch (error) {
      return error;
    }
  }
});
