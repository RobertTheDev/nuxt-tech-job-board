import checkUserSignedIn from '../../handlers/auth/checkUserSignedIn';
import createCompany from '../../handlers/company/createCompany';
import deleteCompanies from '../../handlers/company/deleteCompanies';
import getCompanies from '../../handlers/company/getCompanies';
import User from '@/models/user/types/User';

// This route gets and deletes all companies.
// This route creates a new company.

export default defineEventHandler((event) => {
  // Get the user from the session.
  const user = event.context.session.user as User;

  // Define the request method.
  const { method } = event.node.req;

  // This method finds and returns all the app's companies.
  if (method === 'GET') {
    try {
      // Returns all the app's companies.
      return getCompanies();
    } catch (error) {
      // If error occurs return an error.
      return error;
    }
  }

  // This method deletes all the app's companies.
  if (method === 'DELETE') {
    try {
      // Deletes all the app's companies.
      return deleteCompanies();
    } catch (error) {
      // If error occurs return an error.
      return error;
    }
  }

  // This method creates a new company.
  if (method === 'POST') {
    try {
      // Ensure user is signed in before making this request.
      checkUserSignedIn(user);

      // Gets the body from the request.
      const body = readBody(event);

      // Creates a new company and takes in the body and user as params.
      return createCompany(body, user);
    } catch (error) {
      // If error occurs return an error.
      return error;
    }
  }
});
