import mongoClient from '../../db/mongoClient';

export default defineEventHandler(async (event) => {
  const companiesCollection = mongoClient.collection('companies');

  if (event.node.req.method === 'GET') {
    try {
      return await companiesCollection.find({}).toArray();
    } catch (error) {
      return error;
    }
  }
  if (event.node.req.method === 'POST') {
    try {
      const body = await readBody(event);
      return await companiesCollection.insertOne(body);
    } catch (error) {
      return error;
    }
  }
});
