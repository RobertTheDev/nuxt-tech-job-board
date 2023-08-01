import checkEmailIsTaken from '../../handlers/auth/checkEmailIsTaken';
import checkUserIsNotSignedIn from '../../handlers/auth/checkUserIsNotSignedIn';
import signUp from '../../handlers/auth/signUp';
import signUpSchema from '../../validators/auth/signUpSchema';

export default defineEventHandler(async (event) => {
  // Get the signed in user if it is in session.
  const { user } = await event.context.session;

  // Check user is not signed in. Throws error if user is signed in.
  checkUserIsNotSignedIn(user);

  // Get body from the user request.
  const body = await readBody(event);

  // Validate the body.
  const validatedBody = await signUpSchema.validate(body);

  // Check if user email address has been taken and throw error if it has.
  await checkEmailIsTaken(validatedBody.emailAddress);

  // Call the sign up handler to sign up the user.
  const signedUpUser = await signUp(validatedBody);

  // Create session with the signed up user.
  event.context.session.user = signedUpUser;

  // Return the user.
  return signedUpUser;
});
