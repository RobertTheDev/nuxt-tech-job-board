import checkUserSignedIn from '../../../../handlers/auth/checkUserSignedIn';
import addJobPostTitle from '../../../../handlers/jobPosts/jobPostFields/addJobPostTitle';
import addTitleSchema from '../../../../validators/jobPosts/jobPostFieldSchemas/addTitleSchema';

export default defineEventHandler(async (event) => {
  const { id } = event.context.params as { id: string };
  const { method } = event.node.req;
  const { user } = event.context.session;

  if (method === 'PUT') {
    try {
      checkUserSignedIn(user);

      const body = await readBody(event);

      const validatedBody = await addTitleSchema.validate(body);

      return addJobPostTitle(id, validatedBody);
    } catch (error) {
      return error;
    }
  }
});
