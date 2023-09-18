import getCompanyFollowersByUserId from '../../../controllers/companyFollower/getCompanyFollowersByUserId';
import deleteCompanyFollowersByUserId from '../../../controllers/companyFollower/userId/deleteCompanyFollowersByUserId';

export default defineEventHandler((event) => {
  const { method } = event.node.req;
  const { id } = event.context.params as { id: string };

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
