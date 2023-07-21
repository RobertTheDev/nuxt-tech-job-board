import mongoClient from '../../db/mongoClient';

export default defineEventHandler(async (event) => {
  const usersCollection = mongoClient.collection('users');

  if (event.node.req.method === 'GET') {
    try {
      return await usersCollection.find({}).toArray();
    } catch (error) {
      return error;
    }
  }
  if (event.node.req.method === 'POST') {
    try {
      const body = await readBody(event);
      return await usersCollection.insertOne(body);
    } catch (error) {
      return error;
    }
  }
});
