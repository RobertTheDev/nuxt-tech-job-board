import createApplication from '../../handlers/applications/createApplication';
import deleteApplications from '../../handlers/applications/deleteApplications';
import getApplications from '../../handlers/applications/getApplications';
import checkUserSignedIn from '../../handlers/auth/checkUserSignedIn';
import createApplicationSchema from '../../validators/applications/createApplicationSchema';

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
