import getJobInterviewsByCompanyId from '../../../handlers/jobInterview/getJobInterviewsByCompanyId';

export default defineEventHandler((event) => {
  const { id } = event.context.params as { id: string };
  const { method } = event.node.req;

  if (method === 'GET') {
    try {
      return getJobInterviewsByCompanyId(id);
    } catch (error) {
      return error;
    }
  }
});
