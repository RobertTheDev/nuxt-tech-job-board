import mongoClient from '../../db/mongoClient';

export default defineEventHandler(async (event) => {
  const applicationsCollection = mongoClient.collection('applications');

  if (event.node.req.method === 'GET') {
    try {
      return await applicationsCollection.find({}).toArray();
    } catch (error) {
      return error;
    }
  }
  if (event.node.req.method === 'POST') {
    try {
      const body = await readBody(event);
      return await applicationsCollection.insertOne(body);
    } catch (error) {
      return error;
    }
  }
});
