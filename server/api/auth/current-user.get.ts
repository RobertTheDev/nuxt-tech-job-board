import getUserByEmailAddress from '../../controllers/user/getUserByEmailAddress';
import checkUserSignedIn from '../../controllers/auth/checkUserSignedIn';
import User from '@/models/user/types/User';

// Returns signed in user using session.

export default defineEventHandler(async (event) => {
  // Get the user from session.
  const userFromSession = event.context.session.user as User;

  // Check user is signed in.
  checkUserSignedIn(userFromSession);

  // Get the user from the database.
  const user = await getUserByEmailAddress(userFromSession.emailAddress);

  // If user can be retrieved from database return that otherwise return user data from session.
  if (user) {
    return user;
  }

  return userFromSession;
});
