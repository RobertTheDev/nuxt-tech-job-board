export default defineEventHandler((event) => {
  const { method } = event.node.req;

  if (method === 'GET') {
    try {
      return [];
    } catch (error) {
      return error;
    }
  }
});
