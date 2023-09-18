import getCompanyById from '../../../controllers/company/getCompanyById';
import deleteCompanyById from '../../../controllers/company/deleteCompanyById';
import updateCompanyById from '../../../controllers/company/updateCompanyById';
import updateCompanySchema from '../../../validators/company/updateCompanySchema';
import deleteCompanyOwnersByCompanyId from '../../../controllers/companyOwner/deleteCompanyOwnersByCompanyId';
import checkUserSignedIn from '../../../controllers/auth/checkUserSignedIn';

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
