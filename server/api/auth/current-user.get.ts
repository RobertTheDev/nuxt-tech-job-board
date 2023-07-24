export default defineEventHandler((event) => {
  try {
    const user = event.context.session.user;

    if (!user) {
      throw createError({
        statusCode: 404,
        statusMessage: 'There is currently no authenticated user in session.',
      });
    }

    return user;
  } catch (error) {
    return error;
  }
});
