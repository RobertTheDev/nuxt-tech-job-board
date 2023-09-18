import checkUserSignedIn from '../../controllers/auth/checkUserSignedIn';
import createCompanyOwner from '../../controllers/companyOwner/createCompanyOwner';
import deleteCompanyOwners from '../../controllers/companyOwner/deleteCompanyOwners';
import getCompanyOwners from '../../controllers/companyOwner/getCompanyOwners';
import User from '@/models/user/types/User';

// This route gets and deletes all company owners.
// This route creates a new company owner.

export default defineEventHandler((event) => {
  // Get the user from the session.
  const user = event.context.session.user as User;

  // Define the request method.
  const { method } = event.node.req;

  // This method finds and returns all the app's company owners.
  if (method === 'GET') {
    try {
      // Returns all the app's company owners.
      return getCompanyOwners();
    } catch (error) {
      // If error occurs return an error.
      return error;
    }
  }

  // This method deletes all the app's company owners.
  if (method === 'DELETE') {
    try {
      // Deletes all the app's company owners.
      return deleteCompanyOwners();
    } catch (error) {
      // If error occurs return an error.
      return error;
    }
  }

  // This method creates a new company owner.
  if (method === 'POST') {
    try {
      // Ensure user is signed in before making this request.
      checkUserSignedIn(user);

      // Gets the body from the request.
      const body = readBody(event);

      // Creates a new company owner and takes in the body as params.
      return createCompanyOwner(body);
    } catch (error) {
      // If error occurs return an error.
      return error;
    }
  }
});
