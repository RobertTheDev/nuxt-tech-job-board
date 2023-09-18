import checkUserSignedIn from '../../../controllers/auth/checkUserSignedIn';
import deleteSavedJobPostById from '../../../controllers/savedJobPost/deleteSavedJobPostById';
import getSavedJobPostById from '../../../controllers/savedJobPost/getSavedJobPostById';

// This route returns and deletes a saved job post by its id.

export default defineEventHandler(async (event) => {
  // Defines method to be used.
  const { method } = event.node.req;

  // Get saved job psot id from request params.
  const { id } = event.context.params as { id: string };

  // Get the user id from the user body from the session.
  const { user } = event.context.session;
  const userId = user._id;

  // GET - Finds the saved job post by its id.
  if (method === 'GET') {
    try {
      // Find and return the saved job post by its id.
      return await getSavedJobPostById(id);
    } catch (error) {
      // Catch and return an error if an error occurs.
      return error;
    }
  }
  // DELETE - Deletes the saved job post by its id.
  if (method === 'DELETE') {
    try {
      // Check user is signed in to progress.
      checkUserSignedIn(user);

      // Find the saved job post by its id.
      const savedJobPost = await getSavedJobPostById(id);

      // Check user is the owner of the saved job post and authroized to perform the action.
      const checkAuthorized =
        savedJobPost.user._id.toString() !== userId.toString();

      // Throw 401 if unauthorized to perform action.
      if (checkAuthorized) {
        throw createError({
          statusCode: 401,
          statusMessage: 'You are not authorized to perform this action.',
        });
      }

      // Return the deleted job post id response.
      return await deleteSavedJobPostById(id);
    } catch (error) {
      // Catch and return an error if an error occurs.
      return error;
    }
  }
});
