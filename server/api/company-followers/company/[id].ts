import getCompanyFollowersByCompanyId from '../../../controllers/companyFollower/companyId/getCompanyFollowersByCompanyId';
import deleteCompanyFollowersByCompanyId from '../../../controllers/companyFollower/companyId/deleteCompanyFollowersByCompanyId';
import createCompanyFollower from '../../../controllers/companyFollower/createCompanyFollower';
import checkUserSignedIn from '../../../controllers/auth/checkUserSignedIn';

export default defineEventHandler((event) => {
  const { method } = event.node.req;
  const { id } = event.context.params as { id: string };

  if (method === 'GET') {
    try {
      return getCompanyFollowersByCompanyId(id);
    } catch (error) {
      return error;
    }
  }
  if (method === 'POST') {
    try {
      const { user } = event.context.session;

      checkUserSignedIn(user);

      const userId = user._id;

      return createCompanyFollower({
        createdAt: new Date(),
        companyId: id,
        userId,
      });
    } catch (error) {
      return error;
    }
  }
  if (method === 'DELETE') {
    try {
      return deleteCompanyFollowersByCompanyId(id);
    } catch (error) {
      return error;
    }
  }
});
