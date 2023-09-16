import { ObjectId } from 'mongodb';
import checkUserSignedIn from '../../../handlers/auth/checkUserSignedIn';
import {
  companiesCollection,
  companyFollowersCollection,
} from '../../../lib/mongoDBCollections';
import createCompanyFollowerSchema from '../../../validators/companyFollower/createCompanyFollowerSchema';

async function checkCompanyExists(id: string) {
  const company = await companiesCollection.findOne({
    _id: new ObjectId(id),
  });

  if (!company) {
    throw createError({
      statusCode: 404,
      statusMessage: `Company with ${id} does not exist in the database.`,
    });
  }
}

async function checkIfCompanyFollowerExists(userId: string, companyId: string) {
  const companyFollower = await companiesCollection.findOne({
    userId: new ObjectId(userId),
    companyId: new ObjectId(companyId),
  });

  if (!companyFollower) {
    throw createError({
      statusCode: 404,
      statusMessage: `You have already followed this company.`,
    });
  }
}

export default defineEventHandler(async (event) => {
  const { user } = event.context.session;
  const { id } = event.context.params as { id: string };

  try {
    checkUserSignedIn(user);

    await checkCompanyExists(id);

    await checkIfCompanyFollowerExists(user._id, id);

    const createCompanyFollowerInput = {
      userId: new ObjectId(user._id),
      companyId: new ObjectId(id),
    };

    await createCompanyFollowerSchema.validate(createCompanyFollowerInput);

    return await companyFollowersCollection.insertOne(
      createCompanyFollowerInput,
    );
  } catch (error) {
    return error;
  }
});
