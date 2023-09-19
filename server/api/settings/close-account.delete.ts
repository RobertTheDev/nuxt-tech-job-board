import closeAccountSchema from '../../validators/settings/closeAccountSchema';
import checkPasswordCorrect from '../../controllers/auth/checkPasswordCorrect';
import getUserByEmailAddress from '../../controllers/user/emailAddress/getUserByEmailAddress';
import closeAccount from '../../controllers/settings/closeAccount';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const user = event.context.session.user;

  const validatedBody = await closeAccountSchema.validate(body);

  // Check if a user is signed in.
  const signedInUser = (await getUserByEmailAddress(user.emailAddress)) as any;

  // Check inputted password is incorrect.
  await checkPasswordCorrect(signedInUser.password, validatedBody.password);

  const deleteUser = closeAccount(signedInUser._id.toString());

  event.context.session = null;

  return deleteUser;
});
