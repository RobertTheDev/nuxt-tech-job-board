import signUp from '../../controllers/auth/signUp';

export default defineEventHandler(async (event) => {
  // Get body from the user request.
  const body = await readBody(event);

  // Call the sign up handler to sign up the user.
  const signedUpUser = await signUp(body);

  // Create session with the signed up user.
  event.context.session.user = signedUpUser;

  // Return the user.
  return signedUpUser;
});
