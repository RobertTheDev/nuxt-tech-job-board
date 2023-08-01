import getApplicationsByCompanyId from '../../../handlers/applications/getApplicationsByCompanyId';
import deleteApplicationsByCompanyId from '../../../handlers/applications/deleteApplicationsByCompanyId';
import checkUserSignedIn from '../../../handlers/auth/checkUserSignedIn';

export default defineEventHandler((event) => {
  const { id } = event.context.params as { id: string };
  const { method } = event.node.req;
  const { user } = event.context.session;

  if (method === 'GET') {
    try {
      return getApplicationsByCompanyId(id);
    } catch (error) {
      return error;
    }
  }
  if (method === 'DELETE') {
    try {
      checkUserSignedIn(user);
      return deleteApplicationsByCompanyId(id);
    } catch (error) {
      return error;
    }
  }
});
