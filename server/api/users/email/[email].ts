import checkUserSignedIn from '../../../controllers/auth/checkUserSignedIn';
import getUserByEmailAddress from '../../../controllers/user/getUserByEmailAddress';
import updateUserSchema from '../../../validators/user/updateUserSchema';
import updateUserByEmailAddress from '../../../controllers/user/updateUserByEmailAddress';

export default defineEventHandler(async (event) => {
  const { method } = event.node.req;
  const { email } = event.context.params as { email: string };
  const { user } = event.context.session;

  if (method === 'GET') {
    return getUserByEmailAddress(email);
  }
  if (method === 'PUT') {
    const body = await readBody(event);

    checkUserSignedIn(user);

    const validatedBody = await updateUserSchema.validate(body);

    const updatedUser = await updateUserByEmailAddress(email, validatedBody);

    event.context.session.user = updatedUser;

    return updatedUser;
  }
});
