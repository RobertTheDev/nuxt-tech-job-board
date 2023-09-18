import logger from '../../lib/winstonLogger';
import User from '../../../models/user/types/User';
import getUserByEmailAddress from '../user/getUserByEmailAddress';

// This handler gets the signed in user from the session.

export default async function getSignedInUser(signedInUser: User) {
  try {
    // Throw error if user not signed in the database.
    if (!signedInUser) {
      throw createError({
        statusCode: 404,
        statusMessage: 'There is currently no authenticated user in session.',
      });
    }

    // Return user.
    return await getUserByEmailAddress(signedInUser.emailAddress);
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error(`Error getting the authenticated user:`, error);
    // Rethrow the error to be handled elsewhere if needed
    throw error;
  }
}
