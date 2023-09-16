import checkUserIsNotSignedIn from '../../../handlers/auth/checkUserIsNotSignedIn';
import sendPasswordResetToken from '../../../handlers/auth/sendPasswordResetToken';

export default defineEventHandler(async (event) => {
  // Get the user from session.

  const { user } = event.context.session;

  const body = await readBody(event);

  const { emailAddress } = body;

  // // Check user is signed in.
  checkUserIsNotSignedIn(user);

  return sendPasswordResetToken(emailAddress);
});
