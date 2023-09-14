import checkUserSignedIn from '../../../../handlers/auth/checkUserSignedIn';
import createSavedJobPost from '../../../../handlers/savedJobPost/createSavedJobPost';
import deleteSavedJobPostsByJobPostId from '../../../../handlers/savedJobPost/deleteSavedJobPostsByJobPostId';
import getSavedJobPostByUserIdAndJobPostId from '../../../../handlers/savedJobPost/getSavedJobPostByUserIdAndJobPostId';
import deleteSavedJobPostById from '../../../../handlers/savedJobPost/deleteSavedJobPostById';
import createSavedJobPostSchema from '../../../../validators/savedJobPost/createSavedJobPostSchema';
import incrementUserJobPostsSaved from '../../../../handlers/savedJobPost/incrementUserJobPostsSaved';
import decrementUserJobPostsSaved from '../../../../handlers/savedJobPost/decrementUserJobPostsSaved';

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
        // Decrement the user's total jobs saved.
        await decrementUserJobPostsSaved(userId);

        // Delete saved job post it by its id.
        return await deleteSavedJobPostById(savedJobPost._id.toString());
      }

      // Validate the body.
      const validatedBody = await createSavedJobPostSchema.validate({
        userId,
        jobPostId: id,
      });

      // Create the saved job post with the user's id and the job post id.
      await incrementUserJobPostsSaved(userId);

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
