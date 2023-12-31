import deleteCompanyFollowerById from '../../../controllers/companyFollower/id/deleteCompanyFollowerById';
import getCompanyFollowerById from '../../../controllers/companyFollower/id/getCompanyFollowerById';

export default defineEventHandler((event) => {
  const { method } = event.node.req;
  const { id } = event.context.params as { id: string };

  if (method === 'GET') {
    try {
      return getCompanyFollowerById(id);
    } catch (error) {
      return error;
    }
  }
  if (method === 'DELETE') {
    try {
      return deleteCompanyFollowerById(id);
    } catch (error) {
      return error;
    }
  }
});
