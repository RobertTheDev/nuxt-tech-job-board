import checkUserSignedIn from '../../../controllers/auth/checkUserSignedIn';
import deleteJobPostsByCompanyId from '../../../controllers/jobPost/companyId/deleteJobPostsByCompanyId';
import getJobPostsByCompanyId from '../../../controllers/jobPost/companyId/getJobPostsByCompanyId';

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
