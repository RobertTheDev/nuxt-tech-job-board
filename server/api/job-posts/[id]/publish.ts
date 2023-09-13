import publishJobPost from '../../../handlers/jobPost/publishJobPost';

export default defineEventHandler(async (event) => {
  const { id } = event.context.params as { id: string };
  const { method } = event.node.req;

  if (method === 'POST') {
    try {
      return await publishJobPost(id);
    } catch (error) {
      return error;
    }
  }
});
