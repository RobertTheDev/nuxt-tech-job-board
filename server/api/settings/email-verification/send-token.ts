import sendEmailVerificationCode from '../../../handlers/settings/sendEmailVerificationCode';
import sendEmailVerificationTokenSchema from '../../../validators/settings/sendEmailVerificationTokenSchema';
import checkUserSignedIn from '../../../handlers/auth/checkUserSignedIn';

export default defineEventHandler(async (event) => {
  // Get the user from session.

  const { user } = event.context.session;

  // // Check user is signed in.
  checkUserSignedIn(user);

  const body = await readBody(event);

  const validatedBody = await sendEmailVerificationTokenSchema.validate(body);

  return sendEmailVerificationCode(validatedBody);
});
