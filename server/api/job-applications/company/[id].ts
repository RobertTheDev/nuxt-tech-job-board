import checkUserSignedIn from '../../../controllers/auth/checkUserSignedIn';
import getJobApplicationsByCompanyId from '../../../controllers/jobApplication/getJobApplicationsByCompanyId';
import deleteJobApplicationsByCompanyId from '../../../controllers/jobApplication/deleteJobApplicationsByCompanyId';

export default defineEventHandler((event) => {
  const { id } = event.context.params as { id: string };
  const { method } = event.node.req;
  const { user } = event.context.session;

  if (method === 'GET') {
    try {
      return getJobApplicationsByCompanyId(id);
    } catch (error) {
      return error;
    }
  }
  if (method === 'DELETE') {
    try {
      checkUserSignedIn(user);
      return deleteJobApplicationsByCompanyId(id);
    } catch (error) {
      return error;
    }
  }
});
