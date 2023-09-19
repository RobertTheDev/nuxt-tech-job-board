import deleteNotificationsByUserId from '../../../controllers/notification/userId/deleteNotificationsByUserId';
import getNotificationsByUserId from '../../../controllers/notification/userId/getNotificationsByUserId';

// This route returns and deletes notifications by the authenticated user.

export default defineEventHandler((event) => {
  // Defines method to be used.
  const { method } = event.node.req;

  // Get the user id from the user body from the session.
  const { user } = event.context.session;
  const userId = user._id;

  // GET - Finds the notifications by their user ids matching the authenticated user's id.
  if (method === 'GET') {
    try {
      // Find and return the notifications by their matching user id.
      return getNotificationsByUserId(userId);
    } catch (error) {
      // Catch and return an error if an error occurs.
      return error;
    }
  }
  // DELETE - Deletes the notifications by their user ids matching the authenticated user's id.
  if (method === 'DELETE') {
    try {
      // Delete all notifications by their matching user id.
      return deleteNotificationsByUserId(userId);
    } catch (error) {
      // Catch and return an error if an error occurs.
      return error;
    }
  }
});
