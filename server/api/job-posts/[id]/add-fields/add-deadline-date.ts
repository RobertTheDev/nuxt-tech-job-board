import checkUserSignedIn from '../../../../controllers/auth/checkUserSignedIn';
import addJobPostDeadlineDate from '../../../../controllers/jobPost/jobPostFields/addJobPostDeadlineDate';
import addDeadlineDateSchema from '../../../../validators/jobPost/jobPostFieldSchemas/addDeadlineDateSchema';

export default defineEventHandler(async (event) => {
  const { id } = event.context.params as { id: string };
  const { method } = event.node.req;
  const { user } = event.context.session;

  if (method === 'PUT') {
    try {
      checkUserSignedIn(user);

      const body = await readBody(event);

      const validatedBody = await addDeadlineDateSchema.validate(body);

      return addJobPostDeadlineDate(id, validatedBody);
    } catch (error) {
      return error;
    }
  }
});
