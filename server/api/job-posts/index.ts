import { ObjectId } from 'mongodb';
import getCompanyById from '../../handlers/company/getCompanyById';
import createJobPostSchema from '../../validators/jobPosts/createJobPostSchema';
import {
  companyOwnersCollection,
  jobPostsCollection,
} from '../../lib/collections';
import getJobPosts from '../../handlers/jobPosts/getJobPosts';
import checkUserSignedIn from '../../handlers/auth/checkUserSignedIn';
import getJobPostById from '../../handlers/jobPosts/getJobPostById';

export default defineEventHandler(async (event) => {
  const { user } = event.context.session;
  const { method } = event.node.req;

  if (method === 'GET') {
    try {
      return getJobPosts();
    } catch (error) {
      return error;
    }
  }
  if (method === 'DELETE') {
    try {
      checkUserSignedIn(user);

      return await jobPostsCollection.deleteMany({});
    } catch (error) {
      return error;
    }
  }
  if (method === 'POST') {
    try {
      checkUserSignedIn(user);

      const body = await readBody(event);
      const validatedBody = await createJobPostSchema.validate(body);

      const checkCompanyExists = await getCompanyById(validatedBody.companyId);

      const checkCompanyOwner = await companyOwnersCollection.findOne({
        companyId: new ObjectId(validatedBody.companyId),
        userId: new ObjectId(user._id),
      });

      if (!checkCompanyExists) {
        throw createError({
          statusCode: 400,
          statusMessage: 'Company does not exist.',
        });
      }

      if (!checkCompanyOwner) {
        throw createError({
          statusCode: 401,
          statusMessage: 'You are not a company owner..',
        });
      }

      const createdJobPost = await jobPostsCollection.insertOne({
        ...validatedBody,
        companyId: new ObjectId(validatedBody.companyId),
      });

      return await getJobPostById(createdJobPost.insertedId.toString());
    } catch (error) {
      return error;
    }
  }
});
