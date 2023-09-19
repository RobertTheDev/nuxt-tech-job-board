import addJobPostTitle from '../../../../controllers/jobPost/jobPostFields/addJobPostTitle';
import addTitleSchema from '@/models/jobPost/validators/jobPostFieldSchemas/addTitleSchema';

export default defineEventHandler(async (event) => {
  const { id } = event.context.params as { id: string };
  const { method } = event.node.req;

  if (method === 'PUT') {
    try {
      const body = await readBody(event);

      const validatedBody = await addTitleSchema.validate(body);

      return addJobPostTitle(id, validatedBody);
    } catch (error) {
      return error;
    }
  }
});
