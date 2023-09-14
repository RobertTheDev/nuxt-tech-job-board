import deleteSavedJobPosts from '../../handlers/savedJobPost/deleteSavedJobPosts';
import getSavedJobPosts from '../../handlers/savedJobPost/getSavedJobPosts';

// This route gets and deletes all saved job posts in the app.

export default defineEventHandler(async (event) => {
  // Defines method to be used.
  const { method } = event.node.req;

  if (method === 'GET') {
    try {
      // Return all saved job posts.
      return await getSavedJobPosts();
    } catch (error) {
      return error;
    }
  }
  if (method === 'DELETE') {
    try {
      // Delete all saved job posts.
      return await deleteSavedJobPosts();
    } catch (error) {
      return error;
    }
  }
});
