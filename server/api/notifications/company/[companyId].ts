import getNotificationsByCompanyId from '../../../handlers/notification/getNotificationsByCompanyId';
import deleteNotificationsByCompanyId from '../../../handlers/notification/deleteNotificationsByCompanyId';
import checkUserSignedIn from '../../../handlers/auth/checkUserSignedIn';
import User from '@/models/user/types/User';

// This route gets and deletes all notifications by their matching company id.

export default defineEventHandler((event) => {
  // Get the user from the session.
  const user = event.context.session.user as User;

  // Define the request method.
  const { method } = event.node.req;

  // Gets company from the request params.
  const { companyId } = event.context.params as { companyId: string };

  // This method finds and returns all the app's notifications by shared company id.
  if (method === 'GET') {
    try {
      // Returns all the app's notifications byshared company id.
      return getNotificationsByCompanyId(companyId);
    } catch (error) {
      // If error occurs return an error.
      return error;
    }
  }

  // This method deletes all the app's notifications by shared company id.
  if (method === 'DELETE') {
    try {
      checkUserSignedIn(user);
      // Deletes all the app's notifications by shared company id.
      return deleteNotificationsByCompanyId(companyId);
    } catch (error) {
      // If error occurs return an error.
      return error;
    }
  }
});
