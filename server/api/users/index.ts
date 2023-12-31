import getUsers from '../../controllers/user/getUsers';

// This route gets all users.

export default defineEventHandler((event) => {
  // Define the request method.
  const { method } = event.node.req;

  // This method finds and returns all the app's users.
  if (method === 'GET') {
    try {
      // Returns all the app's users.
      return getUsers();
    } catch (error) {
      // If error occurs return an error.
      return error;
    }
  }
});
