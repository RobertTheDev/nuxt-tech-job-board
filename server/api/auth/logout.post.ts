import checkUserSignedIn from '../../controllers/auth/checkUserSignedIn';

export default defineEventHandler((event) => {
  const { user } = event.context.session;

  checkUserSignedIn(user);

  event.context.session.user = null;

  return {
    statusCode: 200,
    statusMessage: 'User successfully logged out.',
  };
});
