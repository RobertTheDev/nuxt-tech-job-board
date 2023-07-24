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

    return await usersCollection.deleteOne({ _id: new ObjectId(user.id) });
  } catch (error) {
    return error;
  }
});
