import checkUserSignedIn from '../../../handlers/auth/checkUserSignedIn';
import getCompanyFollowersByUserId from '../../../handlers/companyFollower/getCompanyFollowersByUserId';
import deleteCompanyFollowersByUserId from '../../../handlers/companyFollower/deleteCompanyFollowersByUserId';

export default defineEventHandler((event) => {
  const { method } = event.node.req;
  const { user } = event.context.session;

  checkUserSignedIn(user);

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
