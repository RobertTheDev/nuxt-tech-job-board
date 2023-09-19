import getUserById from '../user/id/getUserById';
import checkEmailIsTaken from '@/server/helpers/auth/checkEmailIsTaken';
import signUpSchema from '@/models/auth/validators/signUpSchema';
import User from '@/models/user/types/User';
import { hashPassword } from '@/server/helpers/auth/passwordManagement';
import { usersCollection } from '@/server/lib/mongoDBCollections';
import logger from '@/server/lib/winstonLogger';

// This handler creates an account after sign up by inserting and returning a new user.

export default async function signUp(body: any): Promise<User | null> {
  try {
    // Validate the body.
    const validatedBody = await signUpSchema.validate(body);

    // Destructure password from the validated body.
    const { password, ...input } = validatedBody;

    // Check to see if the email is not alreay in user.
    await checkEmailIsTaken(validatedBody.emailAddress);

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
    return await getUserById(createUser.insertedId.toString());
  } catch (error) {
    // Handle the error here or rethrow it to be handled elsewhere
    logger.error(`Error during user sign up:`, error);
    // Rethrow the error to be handled elsewhere if needed
    throw error;
  }
}
