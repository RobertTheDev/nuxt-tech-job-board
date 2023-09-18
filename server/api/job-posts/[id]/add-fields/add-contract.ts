import checkUserSignedIn from '../../../../controllers/auth/checkUserSignedIn';
import addJobPostContract from '../../../../controllers/jobPost/jobPostFields/addJobPostContract';
import addContractSchema from '../../../../validators/jobPost/jobPostFieldSchemas/addContractSchema';

export default defineEventHandler(async (event) => {
  const { id } = event.context.params as { id: string };
  const { method } = event.node.req;
  const { user } = event.context.session;

  if (method === 'PUT') {
    try {
      checkUserSignedIn(user);

      const body = await readBody(event);

      const validatedBody = await addContractSchema.validate(body);

      return addJobPostContract(id, validatedBody);
    } catch (error) {
      return error;
    }
  }
});
