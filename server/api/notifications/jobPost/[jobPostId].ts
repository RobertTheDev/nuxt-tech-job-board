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

  // Gets job post id from the request params.
  const { jobPostId } = event.context.params as { jobPostId: string };

  // This method finds and returns all the app's notifications by shared job post id.
  if (method === 'GET') {
    try {
      // Returns all the app's notifications by job post id.
      return getNotificationsByJobPostId(jobPostId);
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
      return deleteNotificationsByJobPostId(jobPostId);
    } catch (error) {
      // If error occurs return an error.
      return error;
    }
  }
});
