import createCompanyFollower from '../../controllers/companyFollower/createCompanyFollower';
import getCompanyFollowers from '../../controllers/companyFollower/getCompanyFollowers';

// This route gets and deletes all company followers.
// This route creates a new company follower.

export default defineEventHandler((event) => {
  // Define the request method.
  const { method } = event.node.req;

  // This method finds and returns all the app's company followers.
  if (method === 'GET') {
    try {
      // Returns all the app's company followers.
      return getCompanyFollowers();
    } catch (error) {
      // If error occurs return an error.
      return error;
    }
  }

  // This method creates a new company follower.
  if (method === 'POST') {
    try {
      // Gets the body from the request.
      const body = readBody(event);

      // Creates a new company follower and takes in the body as params.
      return createCompanyFollower(body);
    } catch (error) {
      // If error occurs return an error.
      return error;
    }
  }
});
