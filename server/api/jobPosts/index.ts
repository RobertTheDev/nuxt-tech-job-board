import mongoClient from '../../db/mongoClient';

export default defineEventHandler(async (event) => {
  const jobPostsCollection = mongoClient.collection('jobPosts');

  if (event.node.req.method === 'GET') {
    try {
      return await jobPostsCollection.find({}).toArray();
    } catch (error) {
      return error;
    }
  }
  if (event.node.req.method === 'POST') {
    try {
      const body = await readBody(event);
      return await jobPostsCollection.insertOne(body);
    } catch (error) {
      return error;
    }
  }
});
