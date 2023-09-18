import { usersCollection } from '../../lib/mongoDBCollections';
import { hashPassword } from '../../lib/passwordManagement';
import signUpSchema from '../../validators/auth/signUpSchema';
import logger from '../../lib/winstonLogger';
import redisClient from '../../db/redis';
import findUserById from './findUserById';
import checkEmailIsTaken from './checkEmailIsTaken';
import User from '@/models/user/types/User';

// This handler creates an account after sign up by inserting and returning a new user.

export default async function signUp(body: any) {
  try {
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

    // Find the created user in MongoDB.
    const createdUser = (await findUserById(
      createUser.insertedId.toString(),
    )) as User;

    // Insert the created user into Redis cache.
    await redisClient.set(createdUser._id, JSON.stringify(createdUser));

    // Return the created user from the MongoDB database by id.
    return createdUser;
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error inserting user:', error);
    throw new Error(
      'Sign up could not be completed due to an error. Please try again.',
    );
  }
}
