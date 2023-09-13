import checkUserSignedIn from '../../handlers/auth/checkUserSignedIn';
import createCompanyOwner from '../../handlers/companyOwner/createCompanyOwner';
import deleteCompanyOwners from '../../handlers/companyOwner/deleteCompanyOwners';
import getCompanyOwners from '../../handlers/companyOwner/getCompanyOwners';

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
