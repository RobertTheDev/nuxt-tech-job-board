import getCompanyById from '../../../handlers/companies/getCompanyById';
import deleteCompanyById from '../../../handlers/companies/deleteCompanyById';
import updateCompanyById from '../../../handlers/companies/updateCompanyById';
import updateCompanySchema from '../../../validators/companies/updateCompanySchema';
import deleteCompanyOwnersByCompanyId from '../../../handlers/companyOwners/deleteCompanyOwnersByCompanyId';
import checkUserSignedIn from '../../../handlers/auth/checkUserSignedIn';

export default defineEventHandler(async (event) => {
  const { id } = event.context.params as { id: string };
  const { method } = event.node.req;
  const { user } = event.context.session;

  if (method === 'GET') {
    return getCompanyById(id);
  }
  if (method === 'DELETE') {
    checkUserSignedIn(user);

    const deletedCompany = await deleteCompanyById(id);

    await deleteCompanyOwnersByCompanyId(id);

    return deletedCompany;
  }
  if (method === 'PUT') {
    checkUserSignedIn(user);

    const body = await readBody(event);

    const validatedBody = await updateCompanySchema.validate(body);

    return updateCompanyById(id, validatedBody);
  }
});
