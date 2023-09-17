import changeEmail from '../../handlers/settings/changeEmail';
import checkEmailIsTaken from '../../handlers/auth/checkEmailIsTaken';
import checkPasswordCorrect from '../../handlers/auth/checkPasswordCorrect';
import checkUserSignedIn from '../../handlers/auth/checkUserSignedIn';
import changeEmailSchema from '../../validators/settings/changeEmailSchema';

export default defineEventHandler(async (event) => {
  const { user } = event.context.session;

  // Check if a user is signed in.
  checkUserSignedIn(user);

  const body = await readBody(event);

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
