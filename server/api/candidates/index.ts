import checkUserSignedIn from '../../handlers/auth/checkUserSignedIn';
import createCandidate from '../../handlers/candidate/createJobApplication';
import deleteCandidates from '../../handlers/candidate/deleteCandidates';
import getCandidates from '../../handlers/candidate/getCandidates';
import createCandidateSchema from '../../validators/candidate/createCandidateSchema';

export default defineEventHandler(async (event) => {
  const { user } = event.context.session;
  const { method } = event.node.req;

  if (method === 'GET') {
    return getCandidates();
  }

  if (method === 'DELETE') {
    return deleteCandidates();
  }

  if (method === 'POST') {
    checkUserSignedIn(user);

    const body = await readBody(event);

    const validatedBody = await createCandidateSchema.validate(body);

    return createCandidate(validatedBody);
  }
});
