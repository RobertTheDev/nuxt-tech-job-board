import deleteNotifications from '../../handlers/notification/deleteNotifications';
import getNotifications from '../../handlers/notification/getNotifications';

export default defineEventHandler((event) => {
  const { method } = event.node.req;

  if (method === 'GET') {
    try {
      return getNotifications();
    } catch (error) {
      return error;
    }
  }

  if (method === 'DELETE') {
    try {
      return deleteNotifications();
    } catch (error) {
      return error;
    }
  }
});
