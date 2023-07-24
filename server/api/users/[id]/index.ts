import { ObjectId } from 'mongodb';
import mongoClient from '../../../db/mongoClient';

const noUserFoundMessage = 'No user was found.';

export default defineEventHandler(async (event) => {
  const { method } = event.node.req;

  const usersCollection = mongoClient.collection('users');
  const { id } = event.context.params as { id: string };

  if (method === 'GET') {
    try {
      const user = await usersCollection.findOne({ _id: new ObjectId(id) });

      if (!user) {
        throw createError({
          statusCode: 404,
          statusMessage: noUserFoundMessage,
        });
      }

      return user;
    } catch (error) {
      return error;
    }
  }
  if (method === 'DELETE') {
    try {
      const deletedUser = await usersCollection.findOneAndDelete({
        _id: new ObjectId(id),
      });

      if (!deletedUser) {
        throw createError({
          statusCode: 404,
          statusMessage: noUserFoundMessage,
        });
      }

      return deletedUser;
    } catch (error) {
      return error;
    }
  }
  if (method === 'PUT') {
    try {
      const body = await readBody(event);

      const updatedUser = await usersCollection.findOneAndUpdate(
        { _id: new ObjectId(id) },
        { $set: body },
      );

      if (!updatedUser) {
        throw createError({
          statusCode: 404,
          statusMessage: noUserFoundMessage,
        });
      }

      return updatedUser;
    } catch (error) {
      return error;
    }
  }
});
