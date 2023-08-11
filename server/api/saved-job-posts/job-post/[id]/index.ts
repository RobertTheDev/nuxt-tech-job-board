import checkUserSignedIn from '../../../../handlers/auth/checkUserSignedIn';
import createSavedJobPost from '../../../../handlers/savedJobPosts/createSavedJobPost';
import deleteSavedJobPostsByJobPostId from '../../../../handlers/savedJobPosts/deleteSavedJobPostsByJobPostId';
import getSavedJobPostByUserIdAndJobPostId from '../../../../handlers/savedJobPosts/getSavedJobPostByUserIdAndJobPostId';

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

      // If the user has already saved the job post throw a 400 error.
      if (savedJobPost) {
        throw createError({
          statusCode: 400,
          statusMessage: 'You have already saved this job post.',
        });
      }

      // Create the saved job post with the user's id and the job post id.
      return await createSavedJobPost({
        createdAt: new Date(),
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
