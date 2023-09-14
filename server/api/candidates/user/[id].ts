import getCandidatesByUserId from '../../../handlers/candidate/getCandidatesByUserId';
import checkUserSignedIn from '../../../handlers/auth/checkUserSignedIn';
import deleteCandidatesByUserId from '../../../handlers/candidate/deleteCandidatesByUserId';

export default defineEventHandler((event) => {
  const { id } = event.context.params as { id: string };
  const { method } = event.node.req;
  const { user } = event.context.session;

  if (method === 'GET') {
    try {
      return getCandidatesByUserId(id);
    } catch (error) {
      return error;
    }
  }
  if (method === 'DELETE') {
    try {
      checkUserSignedIn(user);
      return deleteCandidatesByUserId(id);
    } catch (error) {
      return error;
    }
  }
});
