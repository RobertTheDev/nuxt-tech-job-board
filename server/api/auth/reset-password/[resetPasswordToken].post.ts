import checkUserIsNotSignedIn from '../../../handlers/auth/checkUserIsNotSignedIn';
import resetPassword from '../../../handlers/auth/resetPassword';

export default defineEventHandler(async (event) => {
  // Get the user from session.
  const { user } = event.context.session;

  // Check user is signed in.
  checkUserIsNotSignedIn(user);

  // Get saved job psot id from request params.
  const { resetPasswordToken } = event.context.params as {
    resetPasswordToken: string;
  };

  const body = await readBody(event);

  const { password } = body;

  return resetPassword({ password, resetPasswordToken });
});
