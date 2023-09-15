import getJobInterviews from '../../handlers/jobInterview/getJobInterviews';

export default defineEventHandler((event) => {
  const { method } = event.node.req;

  if (method === 'GET') {
    try {
      return getJobInterviews();
    } catch (error) {
      return error;
    }
  }
});
