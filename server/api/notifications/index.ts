import getNotifications from '../../handlers/notification/getNotifications';

export default defineEventHandler(async (event) => {
  const { method } = event.node.req;

  if (method === 'GET') {
    try {
      return await getNotifications();
    } catch (error) {
      return error;
    }
  }
});
