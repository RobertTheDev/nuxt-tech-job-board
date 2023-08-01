import checkUserSignedIn from '../../handlers/auth/checkUserSignedIn';
import createSavedJobPost from '../../handlers/savedJobPosts/createSavedJobPost';
import getSavedJobPosts from '../../handlers/savedJobPosts/getSavedJobPosts';
import { savedJobPostsCollection } from '../../lib/collections';

export default defineEventHandler(async (event) => {
  const { method } = event.node.req;
  const { user } = event.context.session;

  if (method === 'GET') {
    try {
      return getSavedJobPosts();
    } catch (error) {
      return error;
    }
  }
  if (method === 'POST') {
    try {
      checkUserSignedIn(user);

      const body = await readBody(event);

      return createSavedJobPost(body);
    } catch (error) {
      return error;
    }
  }
  if (method === 'DELETE') {
    try {
      return await savedJobPostsCollection.deleteMany();
    } catch (error) {
      return error;
    }
  }
});
