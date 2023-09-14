import checkUserSignedIn from '../../../handlers/auth/checkUserSignedIn';
import getJobApplicationsByCompanyId from '../../../handlers/jobApplication/getJobApplicationsByCompanyId';
import deleteJobApplicationsByCompanyId from '../../../handlers/jobApplication/deleteJobApplicationsByCompanyId';

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
