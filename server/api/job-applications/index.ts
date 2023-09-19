import getJobApplications from '../../controllers/jobApplication/getJobApplications';
import createJobApplication from '../../controllers/jobApplication/createJobApplication';

// This route gets and deletes all job applications.
// This route creates a new job application.

export default defineEventHandler((event) => {
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

  // This method creates a new job application.
  if (method === 'POST') {
    try {
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
