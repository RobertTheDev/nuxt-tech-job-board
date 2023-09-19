import changePassword from '../../controllers/settings/changePassword';
import checkPasswordCorrect from '../../controllers/auth/checkPasswordCorrect';
import changePasswordSchema from '@/models/settings/validators/changePasswordSchema';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const user = event.context.session.user;

  // Validate the inputted body.
  const validatedBody = await changePasswordSchema.validate(body);

  // Check the user's inputted password matches password in the database.
  await checkPasswordCorrect(user.emailAddress, validatedBody.currentPassword);

  const updatedUser = await changePassword(user._id, validatedBody);

  event.context.session.user = updatedUser;

  return updatedUser;
});
