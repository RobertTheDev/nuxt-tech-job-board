import checkUserIsNotSignedIn from '../../controllers/auth/checkUserIsNotSignedIn';
import signUp from '../../controllers/auth/signUp';

export default defineEventHandler(async (event) => {
  // Get the signed in user if it is in session.
  const { user } = await event.context.session;

  // Check user is not signed in. Throws error if user is signed in.
  checkUserIsNotSignedIn(user);

  // Get body from the user request.
  const body = await readBody(event);

  // Call the sign up handler to sign up the user.
  const signedUpUser = await signUp(body);

  // Create session with the signed up user.
  event.context.session.user = signedUpUser;

  // Return the user.
  return signedUpUser;
});
