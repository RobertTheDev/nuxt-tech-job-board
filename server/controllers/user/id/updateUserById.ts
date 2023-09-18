import { ObjectId } from 'mongodb';
import { usersCollection } from '../../../lib/mongoDBCollections';
import updateUserSchema from '../../../validators/user/updateUserSchema';
import logger from '../../../lib/winstonLogger';
import getUserById from './getUserById';
import User from '@/models/user/types/User';

// This handler updates a user's data with matching id.

export default async function updateUserById(
  id: string,
  body: any,
): Promise<User | null> {
  try {
    // Validate the body.
    const validatedBody = await updateUserSchema.validate(body);

    // Update the user by its id with the inputted body.
    await usersCollection.findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: validatedBody },
    );

    // Find and return the updated user by its id.
    return await getUserById(id);
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error updating user by id:', error);
    // Rethrow the error to be handled elsewhere if needed
    throw error;
  }
}
