import { usersCollection } from '../../lib/mongoDBCollections';
import { hashPassword } from '../../lib/passwordManagement';
import signUpSchema from '../../validators/auth/signUpSchema';
import logger from '../../lib/winstonLogger';
import getUserById from '../user/getUserById';
import checkEmailIsTaken from './checkEmailIsTaken';
import User from '@/models/user/types/User';

// This handler creates an account after sign up by inserting and returning a new user.

export default async function signUp(body: any) {
  try {
    // Validate the body.
    const validatedBody = await signUpSchema.validate(body);

    // Check if user email address has been taken and throw error if it has.
    await checkEmailIsTaken(validatedBody.emailAddress);

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
    const createUser = await usersCollection.insertOne(userWithHashedPassword);

    // Return the created user from the MongoDB database by id.
    return (await getUserById(createUser.insertedId.toString())) as User;
  } catch (error) {
    // Handle the error here or rethrow it to be handled elsewhere
    logger.error(`Error during user sign up:`, error);
    // Rethrow the error to be handled elsewhere if needed
    throw error;
  }
}
