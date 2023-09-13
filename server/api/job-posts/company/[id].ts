import checkUserSignedIn from '../../../handlers/auth/checkUserSignedIn';
import deleteJobPostsByCompanyId from '../../../handlers/jobPost/deleteJobPostsByCompanyId';
import getJobPostsByCompanyId from '../../../handlers/jobPost/getJobPostsByCompanyId';

export default defineEventHandler((event) => {
  const { method } = event.node.req;
  const { id } = event.context.params as { id: string };
  const { user } = event.context.session;

  if (method === 'GET') {
    try {
      return getJobPostsByCompanyId(id);
    } catch (error) {
      return error;
    }
  }
  if (method === 'DELETE') {
    try {
      checkUserSignedIn(user);

      return deleteJobPostsByCompanyId(id);
    } catch (error) {
      return error;
    }
  }
});
