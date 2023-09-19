import isAuthenticated from '@/server/helpers/auth/isAuthenticated';

// Get and returns the currently authenticated user from session.

export default defineEventHandler(async (event) => {
  try {
    // Check to user is authenticated.
    await isAuthenticated(event);

    // Get the user from session.
    return await event.context.session.user;
  } catch (error) {
    // If an error occurs return it.
    return error;
  }
});
