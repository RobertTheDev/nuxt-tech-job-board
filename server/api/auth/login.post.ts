import checkPasswordCorrect from '../../controllers/auth/checkPasswordCorrect';
import login from '../../controllers/auth/login';
import loginSchema from '../../validators/auth/loginSchema';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  // Validate the inputted body.
  const validatedBody = await loginSchema.validate(body);

  // Check inputted password is correct.
  await checkPasswordCorrect(
    validatedBody.emailAddress,
    validatedBody.password,
  );

  const loggedInUser = await login(validatedBody);

  event.context.session.user = loggedInUser;

  return loggedInUser;
});
