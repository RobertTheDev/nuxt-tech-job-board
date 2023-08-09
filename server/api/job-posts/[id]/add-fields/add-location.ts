import checkUserSignedIn from '../../../../handlers/auth/checkUserSignedIn';
import addJobPostLocation from '../../../../handlers/jobPosts/jobPostFields/addJobPostLocation';
import addLocationSchema from '../../../../validators/jobPosts/jobPostFieldSchemas/addLocationSchema';

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
