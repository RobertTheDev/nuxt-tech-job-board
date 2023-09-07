import User from '../../../models/user/types/User';

export default function checkUserSignedIn(user: User) {
  // Throw 400 error if user is not signed in.
  if (!user) {
    throw createError({
      statusCode: 400,
      statusMessage: 'There is currently no authenticated user in session.',
    });
  }
}
