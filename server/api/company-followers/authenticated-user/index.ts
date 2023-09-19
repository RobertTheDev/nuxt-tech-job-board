import getCompanyFollowersByUserId from '../../../controllers/companyFollower/userId/getCompanyFollowersByUserId';
import deleteCompanyFollowersByUserId from '../../../controllers/companyFollower/userId/deleteCompanyFollowersByUserId';

export default defineEventHandler((event) => {
  const { method } = event.node.req;

  const { user } = event.context.session;

  const userId = user._id;

  if (method === 'GET') {
    try {
      return getCompanyFollowersByUserId(userId);
    } catch (error) {
      return error;
    }
  }

  if (method === 'DELETE') {
    try {
      return deleteCompanyFollowersByUserId(userId);
    } catch (error) {
      return error;
    }
  }
});
