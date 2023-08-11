import checkUserSignedIn from '../../../../handlers/auth/checkUserSignedIn';
import deleteSavedJobPostByUserIdAndJobPostId from '../../../../handlers/savedJobPosts/deleteSavedJobPostByUserIdAndJobPostId';

// This route find a job post by matching user and job post id and deletes it.

export default defineEventHandler(async (event) => {
  // Defines method to be used.
  const { method } = event.node.req;

  // Gets user from session.
  const { user } = event.context.session;

  // Gets the user's id from the request params.
  const { id } = event.context.params as { id: string };
  const userId = user._id;

  if (method === 'DELETE') {
    try {
      // Checks if user is signed in to continue.
      checkUserSignedIn(user);

      // Finds and deletes saved job post by user id and job post id.
      return await deleteSavedJobPostByUserIdAndJobPostId(userId, id);
    } catch (error) {
      // Return an error if found.
      return error;
    }
  }
});
