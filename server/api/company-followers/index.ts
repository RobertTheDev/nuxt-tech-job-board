import deleteCompanyFollowers from '../../handlers/companyFollowers/deleteCompanyFollowers';
import getCompanyFollowers from '../../handlers/companyFollowers/getCompanyFollowers';

export default defineEventHandler((event) => {
  const { method } = event.node.req;

  if (method === 'GET') {
    try {
      return getCompanyFollowers();
    } catch (error) {
      return error;
    }
  }
  if (method === 'DELETE') {
    try {
      return deleteCompanyFollowers();
    } catch (error) {
      return error;
    }
  }
});
