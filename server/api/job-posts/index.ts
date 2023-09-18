import getJobPosts from '../../controllers/jobPost/getJobPosts';
import checkUserSignedIn from '../../controllers/auth/checkUserSignedIn';
import deleteJobPosts from '../../controllers/jobPost/deleteJobPosts';
import createJobPost from '../../controllers/jobPost/createJobPost';
import User from '@/models/user/types/User';

// This route gets and deletes all job posts.
// This route creates a new job post.

export default defineEventHandler(async (event) => {
  // Get the user from the session.
  const user = event.context.session.user as User;

  // Define the request method.
  const { method } = event.node.req;

  // This method finds and returns all the app's job posts.
  if (method === 'GET') {
    try {
      // Returns all the app's job posts.
      return getJobPosts();
    } catch (error) {
      // If error occurs return an error.
      return error;
    }
  }

  // This method deletes all the app's job posts.
  if (method === 'DELETE') {
    try {
      // Deletes all the app's job posts.
      return deleteJobPosts();
    } catch (error) {
      // If error occurs return an error.
      return error;
    }
  }

  // This method creates a new job post.
  if (method === 'POST') {
    try {
      // Ensure user is signed in before making this request.
      checkUserSignedIn(user);

      // Gets the body from the request.
      const body = await readBody(event);

      // Creates a new job post and takes in the body and user as params.
      return createJobPost(body, user);
    } catch (error) {
      // If error occurs return an error.
      return error;
    }
  }
});
