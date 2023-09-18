import verifyEmailAddress from '../../../controllers/settings/verifyEmailAddress';
import verifyEmailSchema from '../../../validators/settings/verifyEmailSchema';
import checkUserSignedIn from '../../../controllers/auth/checkUserSignedIn';

export default defineEventHandler(async (event) => {
  // Get the user from session.

  const { user } = event.context.session;

  // // Check user is signed in.
  checkUserSignedIn(user);

  // Get saved job psot id from request params.
  const { emailVerificationToken } = event.context.params as {
    emailVerificationToken: string;
  };

  const validatedBody = await verifyEmailSchema.validate({
    emailVerificationToken,
  });

  return verifyEmailAddress(validatedBody);
});
