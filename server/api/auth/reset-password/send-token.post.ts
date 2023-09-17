import sendPasswordResetTokenSchema from '../../../validators/auth/sendPasswordResetTokenSchema';
import checkUserIsNotSignedIn from '../../../handlers/auth/checkUserIsNotSignedIn';
import sendPasswordResetToken from '../../../handlers/auth/sendPasswordResetToken';

export default defineEventHandler(async (event) => {
  // Get the user from session.

  const { user } = event.context.session;

  // // Check user is signed in.
  checkUserIsNotSignedIn(user);

  const body = await readBody(event);

  const validatedBody = await sendPasswordResetTokenSchema.validate(body);

  return sendPasswordResetToken(validatedBody);
});
