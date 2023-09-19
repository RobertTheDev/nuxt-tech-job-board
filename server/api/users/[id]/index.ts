import getUserById from '../../../controllers/user/id/getUserById';
import updateUserById from '../../../controllers/user/id/updateUserById';
import updateUserSchema from '@/models/user/validators/updateUserSchema';

export default defineEventHandler(async (event) => {
  const { method } = event.node.req;
  const { id } = event.context.params as { id: string };

  if (method === 'GET') {
    return getUserById(id);
  }

  if (method === 'PUT') {
    const body = await readBody(event);

    const validatedBody = await updateUserSchema.validate(body);

    const updatedUser = await updateUserById(id, validatedBody);

    event.context.session.user = updatedUser;

    return updatedUser;
  }
});
