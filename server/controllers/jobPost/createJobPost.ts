import { Document, ObjectId } from 'mongodb';
import createJobPostSchema from '../../validators/jobPost/createJobPostSchema';
import {
  companyOwnersCollection,
  jobPostsCollection,
} from '../../lib/mongoDBCollections';
import getCompanyById from '../company/getCompanyById';
import logger from '../../lib/winstonLogger';
import getJobPostById from './getJobPostById';
import User from '@/models/user/types/User';

export default async function createJobPost(
  body: any,
  user: User,
): Promise<Document | null> {
  try {
    const validatedBody = await createJobPostSchema.validate(body);

    const checkCompanyExists = await getCompanyById(
      String(validatedBody.companyId),
    );

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

    // Find and return the created job post by its id.
    return await getJobPostById(createdJobPost.insertedId.toString());
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error creating job post:', error);
    throw new Error(
      'Could not create job post due to an internal server error. Please try again.',
    );
  }
}
