import getNotificationsByUserIdWithoutRelatedFields from '../../../controllers/notification/userId/getNotificationsByUserIdWithoutRelatedFields';

// This route returns notifciations the authenticated user.
// This route does not perform lookups.

export default defineEventHandler((event) => {
  // Defines method to be used.
  const { method } = event.node.req;

  // Get user and user id from the session.
  const { user } = event.context.session;
  const userId = user._id;

  // GET - Finds the notifications by their user ids matching the authenticated user's id.
  if (method === 'GET') {
    try {
      // Return the notifications with the matching user id.
      return getNotificationsByUserIdWithoutRelatedFields(userId);
    } catch (error) {
      // Catch and return an error if an error occurs.
      return error;
    }
  }
});
