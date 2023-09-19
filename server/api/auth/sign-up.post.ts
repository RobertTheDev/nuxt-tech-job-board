import isSignedOut from '@/server/helpers/auth/isSignedOut';
import signUp from '@/server/controllers/auth/signUp';

/* The handlers manages authentication sign up. */

export default defineEventHandler(async (event) => {
  try {
    // Check to see user has not already authenticated.
    await isSignedOut(event);

    // Get body from the user request.
    const body = await readBody(event);

    // Call the sign up handler to sign up the user.
    const signedUpUser = await signUp(body);

    // Create session with the signed up user.
    event.context.session.user = signedUpUser;

    // Return the user.
    return signedUpUser;
  } catch (error) {
    // If an error occurs return it.
    return error;
  }
});
