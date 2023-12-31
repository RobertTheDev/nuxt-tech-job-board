import getNotificationsByUserId from '../../../controllers/notification/userId/getNotificationsByUserId';
import deleteNotificationsByUserId from '../../../controllers/notification/userId/deleteNotificationsByUserId';

// This route gets and deletes all notifications by their mathcing user id.

export default defineEventHandler((event) => {
  // Define the request method.
  const { method } = event.node.req;

  // Gets id from the request params.
  const { id } = event.context.params as { id: string };

  // This method finds and returns all the app's notifications by shared user id.
  if (method === 'GET') {
    try {
      // Returns all the app's notifications by user id.
      return getNotificationsByUserId(id);
    } catch (error) {
      // If error occurs return an error.
      return error;
    }
  }

  // This method deletes all the app's notifications by shared user id.
  if (method === 'DELETE') {
    try {
      // Deletes all the app's notifications by shared user id.
      return deleteNotificationsByUserId(id);
    } catch (error) {
      // If error occurs return an error.
      return error;
    }
  }
});
