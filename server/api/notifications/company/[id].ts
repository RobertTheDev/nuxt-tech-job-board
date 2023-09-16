import getNotificationsByCompanyId from '../../../handlers/notification/getNotificationsByCompanyId';

export default defineEventHandler((event) => {
  const { method } = event.node.req;
  const { id } = event.context.params as { id: string };

  if (method === 'GET') {
    try {
      return getNotificationsByCompanyId(id);
    } catch (error) {
      return error;
    }
  }
});