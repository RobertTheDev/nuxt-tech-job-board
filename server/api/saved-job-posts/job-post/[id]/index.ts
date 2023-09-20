import createSavedJobPost from '../../../../controllers/savedJobPost/createSavedJobPost';
import deleteSavedJobPostsByJobPostId from '../../../../controllers/savedJobPost/jobPostId/deleteSavedJobPostsByJobPostId';
import getSavedJobPostByUserIdAndJobPostId from '../../../../controllers/savedJobPost/userIdAndJobPostId/getSavedJobPostByUserIdAndJobPostId';
import deleteSavedJobPostById from '../../../../controllers/savedJobPost/id/deleteSavedJobPostById';

// This route creates a saved job post and deletes a saved job post by its job post id.

export default defineEventHandler(async (event) => {
  // Gets the user's id from the request params.
  const { id } = event.context.params as { id: string };

  // Define the request method.
  const { method } = event.node.req;

  const user = event.context.session.user;
  const userId = user._id;

  if (method === 'POST') {
    try {
      // Get the saved job post by its matching user id and job post id.
      const savedJobPost = await getSavedJobPostByUserIdAndJobPostId(
        userId,
        id,
      );

      // If the saved job post exists then delete it by its id.
      if (savedJobPost) {
        // Delete saved job post it by its id.
        return await deleteSavedJobPostById(savedJobPost._id.toString());
      }

      // Increment the user's total jobs saved.
      return await createSavedJobPost({
        userId,
        jobPostId: id,
      });
    } catch (error) {
      // Catch and return an error.
      return error;
    }
  }
  if (method === 'DELETE') {
    try {
      // Delete the saved job posts by their matching job post id,
      return deleteSavedJobPostsByJobPostId(id);
    } catch (error) {
      // Catch and return an error.
      return error;
    }
  }
});
