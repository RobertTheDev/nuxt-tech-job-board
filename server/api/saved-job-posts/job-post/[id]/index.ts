import checkUserSignedIn from '../../../../controllers/auth/checkUserSignedIn';
import createSavedJobPost from '../../../../controllers/savedJobPost/createSavedJobPost';
import deleteSavedJobPostsByJobPostId from '../../../../controllers/savedJobPost/jobPostId/deleteSavedJobPostsByJobPostId';
import getSavedJobPostByUserIdAndJobPostId from '../../../../controllers/savedJobPost/getSavedJobPostByUserIdAndJobPostId';
import deleteSavedJobPostById from '../../../../controllers/savedJobPost/id/deleteSavedJobPostById';
import createSavedJobPostSchema from '../../../../validators/savedJobPost/createSavedJobPostSchema';

// This route creates a saved job post and deletes a saved job post by its job post id.

export default defineEventHandler(async (event) => {
  // Defines method to be used.
  const { method } = event.node.req;

  // Get user from the session.
  const { user } = event.context.session;

  // Gets the user's id from the request params.
  const { id } = event.context.params as { id: string };
  const userId = user._id;

  if (method === 'POST') {
    try {
      // Check user is signed in to progress.
      checkUserSignedIn(user);

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

      // Validate the body.
      const validatedBody = await createSavedJobPostSchema.validate({
        userId,
        jobPostId: id,
      });

      // Increment the user's total jobs saved.
      return await createSavedJobPost(validatedBody);
    } catch (error) {
      // Catch and return an error.
      return error;
    }
  }
  if (method === 'DELETE') {
    try {
      // Check user is signed in to progress.
      checkUserSignedIn(user);

      // Delete the saved job posts by their matching job post id,
      return deleteSavedJobPostsByJobPostId(id);
    } catch (error) {
      // Catch and return an error.
      return error;
    }
  }
});
