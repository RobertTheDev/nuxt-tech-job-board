import deleteCompanyFollowerById from '../../../handlers/companyFollower/deleteCompanyFollowerById';
import getCompanyFollowerById from '../../../handlers/companyFollower/getCompanyFollowerById';

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
