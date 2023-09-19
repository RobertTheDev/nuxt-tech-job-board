import getUserByEmailAddress from '../../controllers/user/emailAddress/getUserByEmailAddress';
import User from '@/models/user/types/User';

// Returns signed in user using session.

export default defineEventHandler(async (event) => {
  // Get the user from session.
  const userFromSession = event.context.session.user as User;

  // Get the user from the database.
  const user = await getUserByEmailAddress(userFromSession.emailAddress);

  // If user can be retrieved from database return that otherwise return user data from session.
  if (user) {
    return user;
  }

  return userFromSession;
});
