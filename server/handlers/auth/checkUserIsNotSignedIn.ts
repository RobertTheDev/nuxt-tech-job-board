import User from '../../../lib/types/User';

export default function checkUserIsNotSignedIn(user: User) {
  // Return an error is a user is already in session.
  if (user) {
    throw createError({
      statusCode: 400,
      statusMessage:
        'A user is already signed in. Please log out before creating a new account.',
    });
  }
}
