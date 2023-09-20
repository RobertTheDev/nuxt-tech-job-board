import closeAccountSchema from '@/models/settings/validators/closeAccountSchema';
import { usersCollection } from '@/server/lib/mongoDBCollections';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const { user } = await event.context.session;

  await closeAccountSchema.validate(body);

  return await usersCollection.deleteOne({
    emailAddress: user.emailAddress,
  });
});
