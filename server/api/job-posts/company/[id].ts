import deleteJobPostsByCompanyId from '../../../controllers/jobPost/companyId/deleteJobPostsByCompanyId';
import getJobPostsByCompanyId from '../../../controllers/jobPost/companyId/getJobPostsByCompanyId';

export default defineEventHandler((event) => {
  const { method } = event.node.req;
  const { id } = event.context.params as { id: string };

  if (method === 'GET') {
    try {
      return getJobPostsByCompanyId(id);
    } catch (error) {
      return error;
    }
  }
  if (method === 'DELETE') {
    try {
      return deleteJobPostsByCompanyId(id);
    } catch (error) {
      return error;
    }
  }
});
