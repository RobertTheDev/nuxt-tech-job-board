import { ObjectId } from 'mongodb';
import { usersCollection } from '../../lib/mongoDBCollections';
import { hashPassword } from '../../lib/passwordManagement';
import logger from '../../lib/winstonLogger';
import getUserById from '../user/id/getUserById';
import changePasswordSchema from '@/models/settings/validators/changePasswordSchema';
import User from '@/models/user/types/User';

// This handler changes the user's password.

export default async function changePassword(
  id: string,
  body: any,
): Promise<User | null> {
  try {
    // Validate the body.
    const validatedBody = await changePasswordSchema.validate(body);

    // Get the new password from the validated body.
    const { newPassword } = validatedBody;

    // Hash the password
    const hashedPassword = await hashPassword(newPassword);

    // Update the user by its id.
    await usersCollection.findOneAndUpdate(
      {
        _id: new ObjectId(id),
      },
      { $set: { password: hashedPassword } },
    );

    // Return the user without password field.
    return await getUserById(id);
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error(`Error trying to change the user's password:`, error);
    throw new Error(
      `Could not change the user's due to an error. Please try again.`,
    );
  }
}
