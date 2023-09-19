import getCompanyById from '../../../controllers/company/id/getCompanyById';
import deleteCompanyById from '../../../controllers/company/id/deleteCompanyById';
import updateCompanyById from '../../../controllers/company/id/updateCompanyById';
import updateCompanySchema from '../../../validators/company/updateCompanySchema';
import deleteCompanyOwnersByCompanyId from '../../../controllers/companyOwner/companyId/deleteCompanyOwnersByCompanyId';

export default defineEventHandler(async (event) => {
  const { id } = event.context.params as { id: string };
  const { method } = event.node.req;

  if (method === 'GET') {
    return getCompanyById(id);
  }
  if (method === 'DELETE') {
    const deletedCompany = await deleteCompanyById(id);

    await deleteCompanyOwnersByCompanyId(id);

    return deletedCompany;
  }
  if (method === 'PUT') {
    const body = await readBody(event);

    const validatedBody = await updateCompanySchema.validate(body);

    return updateCompanyById(id, validatedBody);
  }
});
