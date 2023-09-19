import getJobInterviews from '../../controllers/jobInterview/getJobInterviews';
import createJobInterview from '../../controllers/jobInterview/createJobInterview';

// This route gets and deletes all job interviews.
// This route creates a new job interview.

export default defineEventHandler((event) => {
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

  // This method creates a new job interview.
  if (method === 'POST') {
    try {
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
