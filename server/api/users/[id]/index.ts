import { ObjectId } from 'mongodb';
import mongoClient from '../../../db/mongoClient';

export default defineEventHandler(async (event) => {
  const usersCollection = mongoClient.collection('users');
  const { id } = event.context.params as { id: string };

  if (event.node.req.method === 'GET') {
    try {
      return await usersCollection.findOne({ _id: new ObjectId(id) });
    } catch (error) {
      return error;
    }
  }
  if (event.node.req.method === 'DELETE') {
    try {
      return await usersCollection.findOneAndDelete({ _id: new ObjectId(id) });
    } catch (error) {
      return error;
    }
  }
  if (event.node.req.method === 'PUT') {
    try {
      const body = await readBody(event);

      return await usersCollection.findOneAndUpdate(
        { _id: new ObjectId(id) },
        { $set: body },
      );
    } catch (error) {
      return error;
    }
  }
});
