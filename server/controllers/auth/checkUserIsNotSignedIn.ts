import logger from '../../lib/winstonLogger';
import User from '../../../models/user/types/User';

// This handler checks if user is not signed in.

export default function checkUserIsNotSignedIn(user: User) {
  try {
    // Return an error is a user is already in session.
    if (user) {
      throw createError({
        statusCode: 400,
        statusMessage:
          'A user is already signed in. Please log out before creating a new account.',
      });
    }
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error(`Error checking if user is not signed in:`, error);
    throw new Error(
      `Could not check if user is not signed in due to an error. Please try again.`,
    );
  }
}
