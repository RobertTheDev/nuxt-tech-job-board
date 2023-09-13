import checkUserSignedIn from '../../handlers/auth/checkUserSignedIn';
import getUserById from '../../handlers/user/getUserById';

// Returns signed in user using session.

export default defineEventHandler(async (event) => {
  // Get the user from session.
  const userFromSession = event.context.session.user;

  // Check user is signed in.
  checkUserSignedIn(userFromSession);

  // Get the user from the database.
  const user = await getUserById(userFromSession._id);

  // If user can be retrieved from database return that otherwise return user data from session.
  if (user) {
    return user;
  }

  return userFromSession;
});
