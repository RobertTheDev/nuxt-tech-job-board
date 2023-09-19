import logger from '../../lib/winstonLogger';
import User from '../../../models/user/types/User';

// This handler checks if user is already signed in.

export default function checkUserSignedIn(user: User) {
  try {
    // Throw 400 error if user is not signed in.
    if (!user) {
      throw createError({
        statusCode: 400,
        statusMessage: 'There is currently no authenticated user in session.',
      });
    }
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error(`Error checking if user is signed in:`, error);
    // Rethrow the error to be handled elsewhere if needed
    throw error;
  }
}
