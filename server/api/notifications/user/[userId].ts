import getNotificationsByUserId from '../../../handlers/notification/getNotificationsByUserId';
import deleteNotificationsByUserId from '../../../handlers/notification/deleteNotificationsByUserId';
import checkUserSignedIn from '../../../handlers/auth/checkUserSignedIn';
import User from '@/models/user/types/User';

// This route gets and deletes all notifications by their mathcing user id.

export default defineEventHandler((event) => {
  // Get the user from the session.
  const user = event.context.session.user as User;

  // Define the request method.
  const { method } = event.node.req;

  // Gets user id from the request params.
  const { userId } = event.context.params as { userId: string };

  // This method finds and returns all the app's notifications by shared user id.
  if (method === 'GET') {
    try {
      // Returns all the app's notifications by user id.
      return getNotificationsByUserId(userId);
    } catch (error) {
      // If error occurs return an error.
      return error;
    }
  }

  // This method deletes all the app's notifications by shared user id.
  if (method === 'DELETE') {
    try {
      checkUserSignedIn(user);
      // Deletes all the app's notifications by shared user id.
      return deleteNotificationsByUserId(userId);
    } catch (error) {
      // If error occurs return an error.
      return error;
    }
  }
});
