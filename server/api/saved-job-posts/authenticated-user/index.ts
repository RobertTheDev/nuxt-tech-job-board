import checkUserSignedIn from '../../../handlers/auth/checkUserSignedIn';
import deleteSavedJobPostsByUserId from '../../../handlers/savedJobPosts/deleteSavedJobPostsByUserId';
import getSavedJobPostsByUserId from '../../../handlers/savedJobPosts/getSavedJobPostsByUserId';

// This route returns and deletes saved job posts saved by the authenticated user.

export default defineEventHandler((event) => {
  // Defines method to be used.
  const { method } = event.node.req;

  // Get the user id from the user body from the session.
  const { user } = event.context.session;
  const userId = user._id;

  // GET - Finds the saved job posts by their user ids matching the authenticated user's id.
  if (method === 'GET') {
    try {
      // Check user is signed in to progress.
      checkUserSignedIn(user);

      // Find and return the saved job posts by their matching user id.
      return getSavedJobPostsByUserId(userId);
    } catch (error) {
      // Catch and return an error if an error occurs.
      return error;
    }
  }
  // DELETE - Deletes the saved job posts by their user ids matching the authenticated user's id.
  if (method === 'DELETE') {
    try {
      // Check user is signed in to progress.
      checkUserSignedIn(user);

      // Delete all the saved job posts by their matching user id.
      return deleteSavedJobPostsByUserId(userId);
    } catch (error) {
      // Catch and return an error if an error occurs.
      return error;
    }
  }
});
