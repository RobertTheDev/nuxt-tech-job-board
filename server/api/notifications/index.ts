import checkUserSignedIn from '../../controllers/auth/checkUserSignedIn';
import createNotification from '../../controllers/notification/createNotification';
import getNotifications from '../../controllers/notification/getNotifications';
import User from '@/models/user/types/User';

// This route gets and deletes all notications.
// This route creates a new notification.

export default defineEventHandler((event) => {
  // Get the user from the session.
  const user = event.context.session.user as User;

  // Define the request method.
  const { method } = event.node.req;

  // This method finds and returns all the app's notifications.
  if (method === 'GET') {
    try {
      // Returns all the app's notifications.
      return getNotifications();
    } catch (error) {
      // If error occurs return an error.
      return error;
    }
  }

  // This method creates a new notification.
  if (method === 'POST') {
    try {
      // Ensure user is signed in before making this request.
      checkUserSignedIn(user);

      // Gets the body from the request.
      const body = readBody(event);

      // Creates a new notification and takes in the body as params.
      return createNotification(body);
    } catch (error) {
      // If error occurs return an error.
      return error;
    }
  }
});
