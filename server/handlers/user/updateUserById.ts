import { ObjectId } from 'mongodb';
import { usersCollection } from '../../lib/mongoDBCollections';
import { UpdateUserSchemaType } from '../../validators/user/updateUserSchema';
import logger from '../../lib/winstonLogger';
import getUserById from './getUserById';

export default async function updateUserById(
  id: string,
  body: UpdateUserSchemaType,
) {
  try {
    // Update the user by its id with the inputted body.
    await usersCollection.findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: body },
    );

    // Find and return the updated user by its id.
    return await getUserById(id);
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error updating user by id:', error);
    throw new Error(
      'Could not update the user due to an error. Please try again.',
    );
  }
}
