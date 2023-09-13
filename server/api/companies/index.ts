import checkUserSignedIn from '../../handlers/auth/checkUserSignedIn';
import createCompany from '../../handlers/company/createCompany';
import deleteCompanies from '../../handlers/company/deleteCompanies';
import getCompanies from '../../handlers/company/getCompanies';
import createCompanySchema from '../../validators/companies/createCompanySchema';

export default defineEventHandler(async (event) => {
  const { method } = event.node.req;
  const { user } = event.context.session;

  if (method === 'GET') {
    return await getCompanies();
  }
  if (method === 'DELETE') {
    return deleteCompanies();
  }
  if (method === 'POST') {
    checkUserSignedIn(user);

    const body = await readBody(event);

    await createCompanySchema.validate(body);

    return await createCompany(user._id, body);
  }
});
