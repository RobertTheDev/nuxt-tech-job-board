import checkUserSignedIn from '../../handlers/auth/checkUserSignedIn';

export default defineEventHandler((event) => {
  const { user } = event.context.session;

  checkUserSignedIn(user);

  event.context.session.user = null;

  return {
    statusMessage: 'User successfully logged out.',
  };
});
