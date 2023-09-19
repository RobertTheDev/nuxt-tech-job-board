import addJobPostDescription from '../../../../controllers/jobPost/jobPostFields/addJobPostDescription';
import addDescriptionSchema from '@/models/jobPost/validators/jobPostFieldSchemas/addDescriptionSchema';

export default defineEventHandler(async (event) => {
  const { id } = event.context.params as { id: string };
  const { method } = event.node.req;

  if (method === 'PUT') {
    try {
      const body = await readBody(event);

      const validatedBody = await addDescriptionSchema.validate(body);

      return addJobPostDescription(id, validatedBody);
    } catch (error) {
      return error;
    }
  }
});
