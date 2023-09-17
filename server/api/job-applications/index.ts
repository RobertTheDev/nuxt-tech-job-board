import checkUserSignedIn from '../../handlers/auth/checkUserSignedIn';
import deleteJobApplications from '../../handlers/jobApplication/deleteJobApplications';
import getJobApplications from '../../handlers/jobApplication/getJobApplications';
import createJobApplication from '../../handlers/jobApplication/createJobApplication';
import User from '@/models/user/types/User';

// This route gets and deletes all job applications.
// This route creates a new job application.

export default defineEventHandler((event) => {
  // Get the user from the session.
  const user = event.context.session.user as User;

  // Define the request method.
  const { method } = event.node.req;

  // This method finds and returns all the app's job applications.
  if (method === 'GET') {
    try {
      // Returns all the app's job applications.
      return getJobApplications();
    } catch (error) {
      // If error occurs return an error.
      return error;
    }
  }

  // This method deletes all the app's job applications.
  if (method === 'DELETE') {
    try {
      // Deletes all the app's job applications.
      return deleteJobApplications();
    } catch (error) {
      // If error occurs return an error.
      return error;
    }
  }

  // This method creates a new job application.
  if (method === 'POST') {
    try {
      // Ensure user is signed in before making this request.
      checkUserSignedIn(user);

      // Gets the body from the request.
      const body = readBody(event);

      // Creates a new job application and takes in the body as params.
      return createJobApplication(body);
    } catch (error) {
      // If error occurs return an error.
      return error;
    }
  }
});
