import checkUserSignedIn from '../../../handlers/auth/checkUserSignedIn';
import getUserById from '../../../handlers/users/getUserById';
import updateUserById from '../../../handlers/users/updateUserById';
import updateUserSchema from '../../../validators/users/updateUserSchema';

export default defineEventHandler(async (event) => {
  const { method } = event.node.req;
  const { id } = event.context.params as { id: string };
  const { user } = event.context.session;

  if (method === 'GET') {
    return getUserById(id);
  }

  if (method === 'PUT') {
    const body = await readBody(event);

    checkUserSignedIn(user);

    const validatedBody = await updateUserSchema.validate(body);

    const updatedUser = await updateUserById(id, validatedBody);

    event.context.session.user = updatedUser;

    return updatedUser;
  }
});
