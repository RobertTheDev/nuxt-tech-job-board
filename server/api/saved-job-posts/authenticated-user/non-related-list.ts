import checkUserSignedIn from '../../../controllers/auth/checkUserSignedIn';
import getSavedJobPostsWithoutRelatedFields from '../../../controllers/savedJobPost/getSavedJobPostsByUserIdWithoutRelatedFields';

// This route returns saved job posts saved by the authenticated user.
// This route does not perform lookups.

export default defineEventHandler((event) => {
  // Defines method to be used.
  const { method } = event.node.req;

  // Get user and user id from the session.
  const { user } = event.context.session;
  const userId = user._id;

  // GET - Finds the saved job posts by their user ids matching the authenticated user's id.
  if (method === 'GET') {
    try {
      // Check the user is signed in to progress.
      checkUserSignedIn(user);

      // Return the saved job posts with the matching user id.
      return getSavedJobPostsWithoutRelatedFields(userId);
    } catch (error) {
      // Catch and return an error if an error occurs.
      return error;
    }
  }
});
