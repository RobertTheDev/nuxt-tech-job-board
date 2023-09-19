import logger from '../../lib/winstonLogger';
import User from '../../../models/user/types/User';

// This handler checks if the user is not signed in.

export default function checkUserIsNotSignedIn(user: User) {
  try {
    // Return an error if a user is already in session.
    if (user) {
      logger.error(
        `Error checking if user is not signed in:`,
        'Already signed in',
      );
      throw createError({
        statusCode: 400,
        statusMessage:
          'A user is already signed in. Please log out before creating a new account.',
      });
    }
  } catch (error) {
    // Handle the error here or rethrow it to be handled elsewhere
    logger.error(`Error during user sign-in check:`, error);
    // Rethrow the error to be handled elsewhere if needed
    throw error;
  }
}
