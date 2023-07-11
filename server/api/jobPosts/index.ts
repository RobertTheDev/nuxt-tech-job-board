import jobPosts from '../../../lib/data/jobPosts';

export default defineEventHandler((event) => {
  if (event.node.req.method === 'GET') {
    return jobPosts;
  }
});
