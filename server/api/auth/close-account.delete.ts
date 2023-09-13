import checkPasswordCorrect from '../../handlers/auth/checkPasswordCorrect';
import checkUserSignedIn from '../../handlers/auth/checkUserSignedIn';
import deleteUserById from '../../handlers/user/deleteUserById';
import getUserByEmailAddress from '../../handlers/user/getUserByEmailAddress';
import closeAccountSchema from '../../validators/auth/closeAccountSchema';

export default defineEventHandler(async (event) => {
  const { user } = await event.context.session;

  checkUserSignedIn(user);

  const body = await readBody(event);

  const validatedBody = await closeAccountSchema.validate(body);

  // Check if a user is signed in.
  const signedInUser = await getUserByEmailAddress(user.emailAddress);

  // Check inputted password is incorrect.
  await checkPasswordCorrect(signedInUser.password, validatedBody.password);

  const deleteUser = deleteUserById(signedInUser._id.toString());

  event.context.session = null;

  return deleteUser;
});
