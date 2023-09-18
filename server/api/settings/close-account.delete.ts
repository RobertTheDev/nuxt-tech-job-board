import closeAccountSchema from '../../validators/settings/closeAccountSchema';
import checkPasswordCorrect from '../../controllers/auth/checkPasswordCorrect';
import checkUserSignedIn from '../../controllers/auth/checkUserSignedIn';
import getUserByEmailAddress from '../../controllers/user/getUserByEmailAddress';
import closeAccount from '../../controllers/settings/closeAccount';

export default defineEventHandler(async (event) => {
  const { user } = await event.context.session;

  checkUserSignedIn(user);

  const body = await readBody(event);

  const validatedBody = await closeAccountSchema.validate(body);

  // Check if a user is signed in.
  const signedInUser = await getUserByEmailAddress(user.emailAddress);

  // Check inputted password is incorrect.
  await checkPasswordCorrect(signedInUser.password, validatedBody.password);

  const deleteUser = closeAccount(signedInUser._id.toString());

  event.context.session = null;

  return deleteUser;
});
