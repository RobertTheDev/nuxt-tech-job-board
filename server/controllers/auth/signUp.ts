import { usersCollection } from '../../lib/mongoDBCollections';
import { hashPassword } from '../../lib/passwordManagement';
import { SignUpSchemaType } from '../../validators/auth/signUpSchema';
import logger from '../../lib/winstonLogger';
import findUserById from './findUserById';

// This handler creates an account after sign up by inserting and returning a new user.

export default async function signUp(validatedBody: SignUpSchemaType) {
  try {
    // Destructure password from the validated body.
    const { password, ...input } = validatedBody;

    // Hash the password.
    const hashedPassword = await hashPassword(password);

    // Update the input object with the hashed password.
    const userWithHashedPassword = {
      ...input,
      password: hashedPassword,
    };

    // Insert the created user into the database.
    const createdUser = await usersCollection.insertOne(userWithHashedPassword);

    // Find and the created user from the database by id.
    return await findUserById(createdUser.insertedId.toString());
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error inserting user:', error);
    throw new Error(
      'Sign up could not be completed due to an error. Please try again.',
    );
  }
}
