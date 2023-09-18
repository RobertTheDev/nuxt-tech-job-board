import { usersCollection } from '../../lib/mongoDBCollections';
import { UpdateUserSchemaType } from '../../validators/user/updateUserSchema';
import logger from '../../lib/winstonLogger';
import getUserByEmailAddress from './getUserByEmailAddress';

export default async function updateUserByEmailAddress(
  emailAddress: string,
  body: UpdateUserSchemaType,
) {
  try {
    // Update the user by its email address with the inputted body.
    await usersCollection.findOneAndUpdate({ emailAddress }, { $set: body });

    // Find and return the updated user by its email address.
    return await getUserByEmailAddress(emailAddress);
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error updating user by email address:', error);
    throw new Error(
      'Could not update the user due to an error. Please try again.',
    );
  }
}
