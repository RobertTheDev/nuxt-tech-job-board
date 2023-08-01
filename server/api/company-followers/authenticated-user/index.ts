import checkUserSignedIn from '../../../handlers/auth/checkUserSignedIn';
import getCompanyFollowersByUserId from '../../../handlers/companyFollowers/getCompanyFollowersByUserId';
import deleteCompanyFollowersByUserId from '../../../handlers/companyFollowers/deleteCompanyFollowersByUserId';

export default defineEventHandler((event) => {
  const { method } = event.node.req;
  const { user } = event.context.session;

  checkUserSignedIn(user);

  const id = user._id;

  if (method === 'GET') {
    try {
      return getCompanyFollowersByUserId(id);
    } catch (error) {
      return error;
    }
  }
  if (method === 'DELETE') {
    try {
      return deleteCompanyFollowersByUserId(id);
    } catch (error) {
      return error;
    }
  }
});
