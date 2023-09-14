import checkUserSignedIn from '../../../handlers/auth/checkUserSignedIn';
import deleteCandidatesByCompanyId from '../../../handlers/candidate/deleteCandidatesByCompanyId';
import getCandidatesByCompanyId from '../../../handlers/candidate/getCandidatesByCompanyId';

export default defineEventHandler((event) => {
  const { id } = event.context.params as { id: string };
  const { method } = event.node.req;
  const { user } = event.context.session;

  if (method === 'GET') {
    try {
      return getCandidatesByCompanyId(id);
    } catch (error) {
      return error;
    }
  }
  if (method === 'DELETE') {
    try {
      checkUserSignedIn(user);
      return deleteCandidatesByCompanyId(id);
    } catch (error) {
      return error;
    }
  }
});
