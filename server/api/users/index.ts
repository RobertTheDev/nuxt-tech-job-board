import deleteUsers from '../../handlers/user/deleteUsers';
import getUsers from '../../handlers/user/getUsers';

// This route gets and deletes all users.

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

  // This method deletes all the app's users.
  if (method === 'DELETE') {
    try {
      // Deletes all the app's users.
      return deleteUsers();
    } catch (error) {
      // If error occurs return an error.
      return error;
    }
  }
});
