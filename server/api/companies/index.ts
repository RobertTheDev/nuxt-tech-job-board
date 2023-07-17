import companiesData from '../../../lib/data/companies';

export default defineEventHandler((event) => {
  if (event.node.req.method === 'GET') {
    return companiesData;
  }
});
