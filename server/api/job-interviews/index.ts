import checkUserSignedIn from '../../handlers/auth/checkUserSignedIn';
import getJobInterviews from '../../handlers/jobInterview/getJobInterviews';
import deleteJobInterviews from '../../handlers/jobInterview/deleteJobInterviews';
import createJobInterview from '../../handlers/jobInterview/createJobInterview';
import User from '@/models/user/types/User';

// This route gets and deletes all job interviews.
// This route creates a new job interview.

export default defineEventHandler((event) => {
  // Get the user from the session.
  const user = event.context.session.user as User;

  // Define the request method.
  const { method } = event.node.req;

  // This method finds and returns all the app's job interviews.
  if (method === 'GET') {
    try {
      // Returns all the app's job interviews.
      return getJobInterviews();
    } catch (error) {
      // If error occurs return an error.
      return error;
    }
  }

  // This method deletes all the app's job interviews.
  if (method === 'DELETE') {
    try {
      // Deletes all the app's job interviews.
      return deleteJobInterviews();
    } catch (error) {
      // If error occurs return an error.
      return error;
    }
  }

  // This method creates a new job interview.
  if (method === 'POST') {
    try {
      // Ensure user is signed in before making this request.
      checkUserSignedIn(user);

      // Gets the body from the request.
      const body = readBody(event);

      // Creates a new job interview and takes in the body as params.
      return createJobInterview(body);
    } catch (error) {
      // If error occurs return an error.
      return error;
    }
  }
});
