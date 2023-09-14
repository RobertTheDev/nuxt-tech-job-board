import getCompanyFollowersByUserId from '../../../handlers/companyFollower/getCompanyFollowersByUserId';
import deleteCompanyFollowersByUserId from '../../../handlers/companyFollower/deleteCompanyFollowersByUserId';

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
