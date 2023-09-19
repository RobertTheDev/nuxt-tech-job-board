import getJobApplicationsByCompanyId from '../../../controllers/jobApplication/companyId/getJobApplicationsByCompanyId';
import deleteJobApplicationsByCompanyId from '../../../controllers/jobApplication/companyId/deleteJobApplicationsByCompanyId';

export default defineEventHandler((event) => {
  const { id } = event.context.params as { id: string };
  const { method } = event.node.req;

  if (method === 'GET') {
    try {
      return getJobApplicationsByCompanyId(id);
    } catch (error) {
      return error;
    }
  }
  if (method === 'DELETE') {
    try {
      return deleteJobApplicationsByCompanyId(id);
    } catch (error) {
      return error;
    }
  }
});
