import changePassword from '../../controllers/settings/changePassword';
import checkPasswordCorrect from '../../controllers/auth/checkPasswordCorrect';
import checkUserSignedIn from '../../controllers/auth/checkUserSignedIn';
import changePasswordSchema from '../../validators/settings/changePasswordSchema';

export default defineEventHandler(async (event) => {
  const { user } = await event.context.session;

  checkUserSignedIn(user);

  const body = await readBody(event);

  // Validate the inputted body.
  const validatedBody = await changePasswordSchema.validate(body);

  // Check the user's inputted password matches password in the database.
  await checkPasswordCorrect(user.emailAddress, validatedBody.currentPassword);

  const updatedUser = await changePassword(user._id, validatedBody);

  event.context.session.user = updatedUser;

  return updatedUser;
});
