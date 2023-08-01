import getCompanyFollowersByCompanyId from '../../../handlers/companyFollowers/getCompanyFollowersByCompanyId';
import deleteCompanyFollowersByCompanyId from '../../../handlers/companyFollowers/deleteCompanyFollowersByCompanyId';

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
  if (method === 'DELETE') {
    try {
      return deleteCompanyFollowersByCompanyId(id);
    } catch (error) {
      return error;
    }
  }
});
