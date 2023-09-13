import getApplicationsByUserId from '../../../handlers/jobApplications/getApplicationsByUserId';
import deleteApplicationsByUserId from '../../../handlers/jobApplications/deleteApplicationsByUserId';
import checkUserSignedIn from '../../../handlers/auth/checkUserSignedIn';

export default defineEventHandler((event) => {
  const { id } = event.context.params as { id: string };
  const { method } = event.node.req;
  const { user } = event.context.session;

  if (method === 'GET') {
    try {
      return getApplicationsByUserId(id);
    } catch (error) {
      return error;
    }
  }
  if (method === 'DELETE') {
    try {
      checkUserSignedIn(user);
      return deleteApplicationsByUserId(id);
    } catch (error) {
      return error;
    }
  }
});
