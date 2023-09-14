import createJobApplicationSchema from '../../validators/jobApplication/createJobApplicationSchema';
import checkUserSignedIn from '../../handlers/auth/checkUserSignedIn';
import deleteJobApplications from '../../handlers/jobApplication/deleteJobApplications';
import getJobApplications from '../../handlers/jobApplication/getJobApplications';
import createJobApplication from '../../handlers/jobApplication/createJobApplication';

export default defineEventHandler(async (event) => {
  const { user } = event.context.session;
  const { method } = event.node.req;

  if (method === 'GET') {
    return getJobApplications();
  }

  if (method === 'DELETE') {
    return deleteJobApplications();
  }

  if (method === 'POST') {
    checkUserSignedIn(user);

    const body = await readBody(event);

    const validatedBody = await createJobApplicationSchema.validate(body);

    return createJobApplication(validatedBody);
  }
});
