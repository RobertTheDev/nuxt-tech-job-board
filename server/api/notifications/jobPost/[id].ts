import getNotificationsByJobPostId from '../../../handlers/notification/getNotificationsByJobPostId';
import deleteNotificationsByJobPostId from '../../../handlers/notification/deleteNotificationsByJobPostId';
import checkUserSignedIn from '../../../handlers/auth/checkUserSignedIn';
import User from '@/models/user/types/User';

// This route gets and deletes all notifications by their mathcing job post id.

export default defineEventHandler((event) => {
  // Get the user from the session.
  const user = event.context.session.user as User;

  // Define the request method.
  const { method } = event.node.req;

  // Gets id from the request params.
  const { id } = event.context.params as { id: string };

  // This method finds and returns all the app's notifications by shared job post id.
  if (method === 'GET') {
    try {
      // Returns all the app's notifications by job post id.
      return getNotificationsByJobPostId(id);
    } catch (error) {
      // If error occurs return an error.
      return error;
    }
  }

  // This method deletes all the app's notifications by shared job post id.
  if (method === 'DELETE') {
    try {
      checkUserSignedIn(user);
      // Deletes all the app's notifications by shared user id.
      return deleteNotificationsByJobPostId(id);
    } catch (error) {
      // If error occurs return an error.
      return error;
    }
  }
});
