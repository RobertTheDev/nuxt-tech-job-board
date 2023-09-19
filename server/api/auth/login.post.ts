import login from '@/server/controllers/auth/login';
import isSignedOut from '@/server/helpers/auth/isSignedOut';

// This route handles user sign in.

export default defineEventHandler(async (event) => {
  try {
    // Helpers checks to see if user is not already signed in.
    await isSignedOut(event);

    // Get the body from request.
    const body = await readBody(event);

    // Get the logged in user using the login controller.
    const loggedInUser = await login(body);

    // Save logged in user into session.
    event.context.session.user = loggedInUser;

    // Return logged in user.
    return loggedInUser;
  } catch (error) {
    // If an error occurs return it.
    return error;
  }
});
