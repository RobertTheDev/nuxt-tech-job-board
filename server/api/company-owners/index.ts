import checkUserSignedIn from '../../handlers/auth/checkUserSignedIn';
import createCompanyOwner from '../../handlers/companyOwners/createCompanyOwner';
import deleteCompanyOwners from '../../handlers/companyOwners/deleteCompanyOwners';
import getCompanyOwners from '../../handlers/companyOwners/getCompanyOwners';

export default defineEventHandler(async (event) => {
  const { method } = event.node.req;
  const { user } = event.context.session;

  if (method === 'GET') {
    try {
      return getCompanyOwners();
    } catch (error) {
      return error;
    }
  }
  if (method === 'POST') {
    try {
      checkUserSignedIn(user);

      const body = await readBody(event);

      return createCompanyOwner(body);
    } catch (error) {
      return error;
    }
  }

  if (method === 'DELETE') {
    try {
      checkUserSignedIn(user);

      return deleteCompanyOwners();
    } catch (error) {
      return error;
    }
  }
});
