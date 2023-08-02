import checkUserSignedIn from '../../../handlers/auth/checkUserSignedIn';
import getCompanyOwnersByUserId from '../../../handlers/companyOwners/getCompanyOwnersByUserId';

export default defineEventHandler((event) => {
  const { method } = event.node.req;
  const { user } = event.context.session;

  const userId = user._id;

  if (method === 'GET') {
    try {
      // Check user is signed in before performing action
      checkUserSignedIn(user);

      // Return companies owned by he authenticated user.
      return getCompanyOwnersByUserId(userId);
    } catch (error) {
      return error;
    }
  }
});
