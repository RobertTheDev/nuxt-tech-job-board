import checkUserSignedIn from '../../../controllers/auth/checkUserSignedIn';
import getJobApplicationsByUserId from '../../../controllers/jobApplication/getJobApplicationsByUserId';
import deleteJobApplicationsByUserId from '../../../controllers/jobApplication/deleteJobApplicationsByUserId';

export default defineEventHandler((event) => {
  const { id } = event.context.params as { id: string };
  const { method } = event.node.req;
  const { user } = event.context.session;

  if (method === 'GET') {
    try {
      return getJobApplicationsByUserId(id);
    } catch (error) {
      return error;
    }
  }
  if (method === 'DELETE') {
    try {
      checkUserSignedIn(user);
      return deleteJobApplicationsByUserId(id);
    } catch (error) {
      return error;
    }
  }
});
