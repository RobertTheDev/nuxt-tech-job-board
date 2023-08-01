import checkPasswordCorrect from '../../handlers/auth/checkPasswordCorrect';
import checkUserIsNotSignedIn from '../../handlers/auth/checkUserIsNotSignedIn';
import login from '../../handlers/auth/login';
import loginSchema from '../../validators/auth/loginSchema';

export default defineEventHandler(async (event) => {
  // Get the signed in user if it is in session.
  const { user } = await event.context.session;

  const body = await readBody(event);

  // Validate the inputted body.
  const validatedBody = await loginSchema.validate(body);

  checkUserIsNotSignedIn(user);

  // Check inputted password is correct.
  await checkPasswordCorrect(
    validatedBody.emailAddress,
    validatedBody.password,
  );

  const loggedInUser = await login(validatedBody);

  event.context.session.user = loggedInUser;

  return loggedInUser;
});
