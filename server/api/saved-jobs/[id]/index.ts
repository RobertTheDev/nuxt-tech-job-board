import checkUserSignedIn from '../../../handlers/auth/checkUserSignedIn';
import createSavedJobPost from '../../../handlers/savedJobPosts/createSavedJobPost';

export default defineEventHandler((event) => {
  const { id } = event.context.params as { id: string };
  const { method } = event.node.req;
  const { user } = event.context.session;

  if (method === 'POST') {
    checkUserSignedIn(user);

    return createSavedJobPost(user, id);
  }
});
