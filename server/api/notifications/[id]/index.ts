import getNotificationById from '../../../controllers/notification/id/getNotificationById';
import deleteNotificationById from '../../../controllers/notification/id/deleteNotificationById';
import updateNotificationById from '../../../controllers/notification/id/updateNotificationById';
import checkUserSignedIn from '../../../controllers/auth/checkUserSignedIn';
import User from '@/models/user/types/User';

// This route gets and deletes a notification by its id.
// This route updates a notification by its id.

export default defineEventHandler((event) => {
  // Get the user from the session.
  const user = event.context.session.user as User;

  // Define the request method.
  const { method } = event.node.req;

  // Gets id from the request params.
  const { id } = event.context.params as { id: string };

  // This method finds and returns the app's notification by its id.
  if (method === 'GET') {
    try {
      // Returns the notification by its id.
      return getNotificationById(id);
    } catch (error) {
      // If error occurs return an error.
      return error;
    }
  }

  // This method deletes notification by its id.
  if (method === 'DELETE') {
    try {
      // Checks user is signed in to use route.
      checkUserSignedIn(user);

      // Deletes the notification by its id.
      return deleteNotificationById(id);
    } catch (error) {
      // If error occurs return an error.
      return error;
    }
  }

  // This method updates notification by its id.
  if (method === 'PUT') {
    try {
      // Checks user is signed in to use route.
      checkUserSignedIn(user);

      // Gets the body from the request.
      const body = readBody(event);

      // Updates notification by id.
      return updateNotificationById(id, body);
    } catch (error) {
      // If error occurs return an error.
      return error;
    }
  }
});
