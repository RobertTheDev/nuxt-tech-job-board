import User from '../../../models/user/types/User';
import findUserById from './findUserById';

export default async function getSignedInUser(signedInUser: User) {
  // Throw error if user not signed in the database.
  if (!signedInUser) {
    throw createError({
      statusCode: 404,
      statusMessage: 'There is currently no authenticated user in session.',
    });
  }

  // Return user.
  return await findUserById(signedInUser._id);
}
