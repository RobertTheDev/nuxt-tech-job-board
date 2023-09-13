import getCompanyOwnersByCompanyId from '../../../handlers/companyOwner/getCompanyOwnersByCompanyId';

export default defineEventHandler((event) => {
  const { method } = event.node.req;
  const { id } = event.context.params as { id: string };

  if (method === 'GET') {
    try {
      return getCompanyOwnersByCompanyId(id);
    } catch (error) {
      return error;
    }
  }
});
