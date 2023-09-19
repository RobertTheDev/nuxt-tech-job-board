import getCompanyOwnersByUserId from '../../../controllers/companyOwner/userId/getCompanyOwnersByUserId';

export default defineEventHandler((event) => {
  const { method } = event.node.req;
  const { user } = event.context.session;

  const userId = user._id;

  if (method === 'GET') {
    try {
      // Return companies owned by he authenticated user.
      return getCompanyOwnersByUserId(userId);
    } catch (error) {
      return error;
    }
  }
});
