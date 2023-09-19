import { H3Event } from 'h3';
import logger from '@/server/lib/winstonLogger';

// This helper function checks to see if the user has authenticated before performing action.
export default async function isAuthenticated(event: H3Event) {
  try {
    // Check to see if user from session.
    const { user } = await event.context.session;

    // If there is no user in session return a 401 error.
    if (!user) {
      throw createError({
        statusCode: 401,
        message: 'You have not signed in. Please sign in and try again.',
      });
    }
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error(`Error checking if user is unauthenticated:`, error);

    // Rethrow the error to be handled elsewhere if needed
    throw error;
  }
}
