import createApplication from '../../handlers/jobApplications/createApplication';
import deleteApplications from '../../handlers/jobApplications/deleteApplications';
import getApplications from '../../handlers/jobApplications/getApplications';
import checkUserSignedIn from '../../handlers/auth/checkUserSignedIn';
import createApplicationSchema from '../../validators/jobApplication/createJobApplicationSchema';

export default defineEventHandler(async (event) => {
  const { user } = event.context.session;
  const { method } = event.node.req;

  if (method === 'GET') {
    return getApplications();
  }

  if (method === 'DELETE') {
    return deleteApplications();
  }

  if (method === 'POST') {
    checkUserSignedIn(user);

    const body = await readBody(event);

    const validatedBody = await createApplicationSchema.validate(body);

    return createApplication(user, validatedBody);
  }
});
