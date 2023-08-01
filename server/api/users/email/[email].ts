import getUserByEmailAddress from '../../../handlers/users/getUserByEmailAddress';

export default defineEventHandler((event) => {
  const { method } = event.node.req;

  const { email } = event.context.params as { email: string };

  if (method === 'GET') {
    return getUserByEmailAddress(email);
  }
});
