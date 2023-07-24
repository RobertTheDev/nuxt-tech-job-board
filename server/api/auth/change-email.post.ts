import { ObjectId } from 'mongodb';
import { usersCollection } from '../../lib/collections';

export default defineEventHandler(async (event) => {
  try {
    const user = event.context.session.user;

    if (!user) {
      throw createError({
        statusCode: 401,
        statusMessage:
          'Unauthorized. There is currently no authenticated user in session.',
      });
    }

    const body = await readBody(event);

    return await usersCollection.findOneAndUpdate(
      { _id: new ObjectId(user.id) },
      { $set: { emailAddress: body.emailAddress } },
    );
  } catch (error) {
    return error;
  }
});
