import getJobApplicationsByUserId from '../../../controllers/jobApplication/userId/getJobApplicationsByUserId';
import deleteJobApplicationsByUserId from '../../../controllers/jobApplication/userId/deleteJobApplicationsByUserId';

export default defineEventHandler((event) => {
  const { id } = event.context.params as { id: string };
  const { method } = event.node.req;

  if (method === 'GET') {
    try {
      return getJobApplicationsByUserId(id);
    } catch (error) {
      return error;
    }
  }
  if (method === 'DELETE') {
    try {
      return deleteJobApplicationsByUserId(id);
    } catch (error) {
      return error;
    }
  }
});
