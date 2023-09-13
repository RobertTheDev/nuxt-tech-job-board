import deleteUsers from '../../handlers/user/deleteUsers';
import getUsers from '../../handlers/user/getUsers';

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
