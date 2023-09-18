import { usersCollection } from '../../../lib/mongoDBCollections';
import updateUserSchema from '../../../validators/user/updateUserSchema';
import logger from '../../../lib/winstonLogger';
import getUserByEmailAddress from './getUserByEmailAddress';
import User from '@/models/user/types/User';

// This handler updates a user's data with matching email address.

export default async function updateUserByEmailAddress(
  emailAddress: string,
  body: any,
): Promise<User | null> {
  try {
    // Validate the body.
    const validatedBody = await updateUserSchema.validate(body);

    // Update the user by its email address with the inputted body.
    await usersCollection.findOneAndUpdate(
      { emailAddress },
      { $set: validatedBody },
    );

    // Find and return the updated user by its email address.
    return await getUserByEmailAddress(emailAddress);
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error updating user by email address:', error);
    // Rethrow the error to be handled elsewhere if needed
    throw error;
  }
}
