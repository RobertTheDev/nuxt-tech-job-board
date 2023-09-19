import { ObjectId } from 'mongodb';
import { usersCollection } from '../../lib/mongoDBCollections';
import logger from '../../lib/winstonLogger';
import getUserById from '../user/id/getUserById';
import User from '@/models/user/types/User';
import changeEmailSchema from '@/models/settings/validators/changeEmailSchema';

// This handler changes the user's email.

export default async function changeEmail(
  id: string,
  body: any,
): Promise<User | null> {
  try {
    // Validate the body.
    const validatedBody = await changeEmailSchema.validate(body);

    // Update the user by its id.
    await usersCollection.findOneAndUpdate(
      {
        _id: new ObjectId(id),
      },
      {
        $set: {
          emailAddress: validatedBody.newEmailAddress,
          emailVerified: null,
          updatedAt: validatedBody.updatedAt,
        },
      },
    );

    // Return the updated user by its id.
    return await getUserById(id.toString());
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error(`Error trying to change the user's email:`, error);
    throw new Error(
      'Could not change the user email due to an error. Please try again.',
    );
  }
}
