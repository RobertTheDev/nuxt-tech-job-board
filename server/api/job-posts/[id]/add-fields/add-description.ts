import checkUserSignedIn from '../../../../controllers/auth/checkUserSignedIn';
import addJobPostDescription from '../../../../controllers/jobPost/jobPostFields/addJobPostDescription';
import addDescriptionSchema from '../../../../validators/jobPost/jobPostFieldSchemas/addDescriptionSchema';

export default defineEventHandler(async (event) => {
  const { id } = event.context.params as { id: string };
  const { method } = event.node.req;
  const { user } = event.context.session;

  if (method === 'PUT') {
    try {
      checkUserSignedIn(user);

      const body = await readBody(event);

      const validatedBody = await addDescriptionSchema.validate(body);

      return addJobPostDescription(id, validatedBody);
    } catch (error) {
      return error;
    }
  }
});
