import checkUserSignedIn from '../../handlers/auth/checkUserSignedIn';

export default defineEventHandler((event) => {
  const user = event.context.session.user;

  checkUserSignedIn(user);

  return user;
});
