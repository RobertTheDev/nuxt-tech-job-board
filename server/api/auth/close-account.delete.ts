import checkPasswordCorrect from '../../handlers/auth/checkPasswordCorrect';
import checkUserSignedIn from '../../handlers/auth/checkUserSignedIn';
import getSignedInUser from '../../handlers/auth/getSignedInUser';
import deleteUserById from '../../handlers/users/deleteUserById';
import closeAccountSchema from '../../validators/auth/closeAccountSchema';

export default defineEventHandler(async (event) => {
  const { user } = await event.context.session;

  checkUserSignedIn(user);

  const body = await readBody(event);

  const validatedBody = await closeAccountSchema.validate(body);

  // Check if a user is signed in.
  const signedInUser = await getSignedInUser(user);

  // Check inputted password is incorrect.
  checkPasswordCorrect(signedInUser.password, validatedBody.password);

  const deleteUser = deleteUserById(signedInUser._id.toString());

  event.context.session = null;

  return deleteUser;
});
