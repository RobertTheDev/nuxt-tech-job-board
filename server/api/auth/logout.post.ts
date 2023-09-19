export default defineEventHandler((event) => {
  event.context.session.user = null;

  return {
    statusCode: 200,
    statusMessage: 'User successfully logged out.',
  };
});
