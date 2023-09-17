import checkUserIsNotSignedIn from '../../../handlers/auth/checkUserIsNotSignedIn';
import resetPassword from '../../../handlers/auth/resetPassword';
import resetPasswordSchema from '../../../validators/auth/resetPasswordSchema';

export default defineEventHandler(async (event) => {
  // Get the user from session.

  const { user } = event.context.session;

  // // Check user is signed in.
  checkUserIsNotSignedIn(user);

  // Get saved job psot id from request params.
  const { resetPasswordToken } = event.context.params as {
    resetPasswordToken: string;
  };

  const body = await readBody(event);

  const validatedBody = await resetPasswordSchema.validate({
    resetPasswordToken,
    password: body.password,
  });

  return resetPassword(validatedBody);
});
