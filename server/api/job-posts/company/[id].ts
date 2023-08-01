import checkUserSignedIn from '../../../handlers/auth/checkUserSignedIn';
import deleteJobPostsByCompanyId from '../../../handlers/jobPosts/deleteJobPostsByCompanyId';
import getJobPostsByCompanyId from '../../../handlers/jobPosts/getJobPostsByCompanyId';

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
