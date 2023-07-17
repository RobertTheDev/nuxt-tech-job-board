import companies from '../../../../lib/data/companies';

export default defineEventHandler((event) => {
  if (event.node.req.method === 'GET') {
    const { id } = event.context.params as { id: string };
    return companies.find((props) => props.id === id);
  }
});
