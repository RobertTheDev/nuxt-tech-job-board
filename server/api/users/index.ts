import deleteUsers from '../../handlers/users/deleteUsers';
import getUsers from '../../handlers/users/getUsers';

export default defineEventHandler((event) => {
  const { method } = event.node.req;

  if (method === 'GET') {
    try {
      return getUsers();
    } catch (error) {
      return error;
    }
  }
  if (method === 'DELETE') {
    try {
      return deleteUsers();
    } catch (error) {
      return error;
    }
  }
});
