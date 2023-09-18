import logger from '../../lib/winstonLogger';
import User from '../../../models/user/types/User';
import findUserById from './findUserById';

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
    return await findUserById(signedInUser._id);
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error(`Error getting the authenticated user:`, error);
    throw new Error(
      `Could not find the authenticated user due to an error. Please try again.`,
    );
  }
}
