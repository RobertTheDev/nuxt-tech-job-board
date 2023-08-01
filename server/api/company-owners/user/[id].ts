import getCompanyOwnersByUserId from '../../../handlers/companyOwners/getCompanyOwnersByUserId';

export default defineEventHandler((event) => {
  const { method } = event.node.req;

  const { id } = event.context.params as { id: string };

  if (method === 'GET') {
    try {
      return getCompanyOwnersByUserId(id);
    } catch (error) {
      return error;
    }
  }
});
