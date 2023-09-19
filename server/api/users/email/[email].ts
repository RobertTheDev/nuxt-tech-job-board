import getUserByEmailAddress from '../../../controllers/user/emailAddress/getUserByEmailAddress';
import updateUserSchema from '../../../validators/user/updateUserSchema';
import updateUserByEmailAddress from '../../../controllers/user/emailAddress/updateUserByEmailAddress';

export default defineEventHandler(async (event) => {
  const { method } = event.node.req;
  const { email } = event.context.params as { email: string };

  if (method === 'GET') {
    return getUserByEmailAddress(email);
  }
  if (method === 'PUT') {
    const body = await readBody(event);

    const validatedBody = await updateUserSchema.validate(body);

    const updatedUser = await updateUserByEmailAddress(email, validatedBody);

    event.context.session.user = updatedUser;

    return updatedUser;
  }
});
