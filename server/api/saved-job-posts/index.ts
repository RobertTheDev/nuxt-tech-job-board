import checkUserSignedIn from '../../handlers/auth/checkUserSignedIn';
import deleteSavedJobPosts from '../../handlers/savedJobPost/deleteSavedJobPosts';
import getSavedJobPosts from '../../handlers/savedJobPost/getSavedJobPosts';
import createSavedJobPost from '../../handlers/savedJobPost/createSavedJobPost';
import User from '@/models/user/types/User';

// This route gets and deletes all saved job posts in the app.
// This route creates a new saved job post in the app.

export default defineEventHandler((event) => {
  // Get the user from the session.
  const user = event.context.session.user as User;

  // Define the request method.
  const { method } = event.node.req;

  // This method finds and returns all the app's saved job posts.
  if (method === 'GET') {
    try {
      // Returns all the app's saved job posts.
      return getSavedJobPosts();
    } catch (error) {
      // If error occurs return an error.
      return error;
    }
  }

  // This method deletes all the app's saved job posts.
  if (method === 'DELETE') {
    try {
      // Deletes all the app's saved job posts.
      return deleteSavedJobPosts();
    } catch (error) {
      // If error occurs return an error.
      return error;
    }
  }

  // This method creates a new saved job post.
  if (method === 'POST') {
    try {
      // Ensure user is signed in before making this request.
      checkUserSignedIn(user);

      // Gets the body from the request.
      const body = readBody(event);

      // Creates a new saved job post and takes in the body as params.
      return createSavedJobPost(body);
    } catch (error) {
      // If error occurs return an error.
      return error;
    }
  }
});
