import checkUserSignedIn from '../../../../handlers/auth/checkUserSignedIn';
import addJobPostDeadlineDate from '../../../../handlers/jobPosts/jobPostFields/addJobPostDeadlineDate';
import addDeadlineDateSchema from '../../../../validators/jobPosts/jobPostFieldSchemas/addDeadlineDateSchema';

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