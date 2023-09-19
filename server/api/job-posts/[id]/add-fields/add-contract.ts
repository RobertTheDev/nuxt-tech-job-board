import addJobPostContract from '../../../../controllers/jobPost/jobPostFields/addJobPostContract';
import addContractSchema from '../../../../validators/jobPost/jobPostFieldSchemas/addContractSchema';

export default defineEventHandler(async (event) => {
  const { id } = event.context.params as { id: string };
  const { method } = event.node.req;

  if (method === 'PUT') {
    try {
      const body = await readBody(event);

      const validatedBody = await addContractSchema.validate(body);

      return addJobPostContract(id, validatedBody);
    } catch (error) {
      return error;
    }
  }
});
