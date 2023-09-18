import deleteCompanyOwnerById from '../../../controllers/companyOwner/id/deleteCompanyOwnerById';
import getCompanyOwnerById from '../../../controllers/companyOwner/id/getCompanyOwnerById';

export default defineEventHandler((event) => {
  const { method } = event.node.req;
  const { id } = event.context.params as { id: string };

  if (method === 'GET') {
    try {
      return getCompanyOwnerById(id);
    } catch (error) {
      return error;
    }
  }
  if (method === 'DELETE') {
    try {
      return deleteCompanyOwnerById(id);
    } catch (error) {
      return error;
    }
  }
});
