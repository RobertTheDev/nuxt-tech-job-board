import changePassword from '../../handlers/auth/changePassword';
import checkPasswordCorrect from '../../handlers/auth/checkPasswordCorrect';
import checkUserSignedIn from '../../handlers/auth/checkUserSignedIn';

import changePasswordSchema from '../../validators/auth/changePasswordSchema';

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
