import jobPosts from '../../../../lib/data/jobPosts';

export default defineEventHandler((event) => {
  if (event.node.req.method === 'GET') {
    const { id } = event.context.params as { id: string };
    return jobPosts.find((props) => props.id === id);
  }
});
