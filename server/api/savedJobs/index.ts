import mongoClient from '../../db/mongoClient';

export default defineEventHandler(async (event) => {
  const savedJobsCollection = mongoClient.collection('savedJobs');

  if (event.node.req.method === 'GET') {
    try {
      return await savedJobsCollection.find({}).toArray();
    } catch (error) {
      return error;
    }
  }
  if (event.node.req.method === 'POST') {
    try {
      const body = await readBody(event);
      return await savedJobsCollection.insertOne(body);
    } catch (error) {
      return error;
    }
  }
});
