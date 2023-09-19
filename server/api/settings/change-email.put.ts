import changeEmail from '../../controllers/settings/changeEmail';
import checkEmailIsTaken from '../../controllers/auth/checkEmailIsTaken';
import checkPasswordCorrect from '../../controllers/auth/checkPasswordCorrect';
import changeEmailSchema from '@/models/settings/validators/changeEmailSchema';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const user = event.context.session.user;

  // Validate the inputted body.
  const validatedBody = await changeEmailSchema.validate(body);

  // Make sure the inputted old password is correct in order to change the password.
  await checkPasswordCorrect(user.emailAddress, validatedBody.password);

  // Make sure new email is not already in use in the database.
  await checkEmailIsTaken(validatedBody.newEmailAddress);

  const updatedUser = await changeEmail(user._id.toString(), validatedBody);

  event.context.session.user = updatedUser;

  return updatedUser;
});
