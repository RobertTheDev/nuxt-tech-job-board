import getJobPosts from '../../handlers/jobPost/getJobPosts';
import checkUserSignedIn from '../../handlers/auth/checkUserSignedIn';
import deleteJobPosts from '../../handlers/jobPost/deleteJobPosts';
import createJobPost from 'server/handlers/jobPost/createJobPost';
import User from '@/models/user/types/User';

export default defineEventHandler(async (event) => {
  const user = event.context.session.user as User;
  const { method } = event.node.req;

  if (method === 'GET') {
    try {
      return getJobPosts();
    } catch (error) {
      return error;
    }
  }
  if (method === 'DELETE') {
    try {
      return deleteJobPosts();
    } catch (error) {
      return error;
    }
  }
  if (method === 'POST') {
    try {
      checkUserSignedIn(user);

      const body = await readBody(event);

      return createJobPost(body, user);
    } catch (error) {
      return error;
    }
  }
});
