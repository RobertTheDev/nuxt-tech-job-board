import addJobPostDeadlineDate from '../../../../controllers/jobPost/jobPostFields/addJobPostDeadlineDate';
import addDeadlineDateSchema from '../../../../validators/jobPost/jobPostFieldSchemas/addDeadlineDateSchema';

export default defineEventHandler(async (event) => {
  const { id } = event.context.params as { id: string };
  const { method } = event.node.req;

  if (method === 'PUT') {
    try {
      const body = await readBody(event);

      const validatedBody = await addDeadlineDateSchema.validate(body);

      return addJobPostDeadlineDate(id, validatedBody);
    } catch (error) {
      return error;
    }
  }
});
