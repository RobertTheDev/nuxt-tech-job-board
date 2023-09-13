import checkUserSignedIn from '../../../../handlers/auth/checkUserSignedIn';
import addJobPostLocation from '../../../../handlers/jobPost/jobPostFields/addJobPostLocation';
import addLocationSchema from '../../../../validators/jobPost/jobPostFieldSchemas/addLocationSchema';

export default defineEventHandler(async (event) => {
  const { id } = event.context.params as { id: string };
  const { method } = event.node.req;
  const { user } = event.context.session;

  if (method === 'PUT') {
    try {
      checkUserSignedIn(user);

      const body = await readBody(event);

      const validatedBody = await addLocationSchema.validate(body);

      return addJobPostLocation(id, validatedBody);
    } catch (error) {
      return error;
    }
  }
});
