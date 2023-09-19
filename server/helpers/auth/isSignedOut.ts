import { H3Event } from 'h3';
import logger from '@/server//lib/winstonLogger';

// This helper function checks to see if the user is not in session and signed out before performing action.

export default async function isSignedOut(event: H3Event) {
  try {
    // Check to see if user from session.
    const { user } = await event.context.session;

    // If there is a user in session return a 400 error.
    if (user) {
      throw createError({
        statusCode: 400,
        message: 'You have already signed in. Please sign out and try again.',
      });
    }
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error(`Error checking if user has already authenticated: `, error);

    // Rethrow the error to be handled elsewhere if needed
    throw error;
  }
}
