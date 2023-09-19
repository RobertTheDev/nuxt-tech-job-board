import getUserByEmailAddress from '../user/emailAddress/getUserByEmailAddress';
import checkPasswordCorrect from '@/server/helpers/auth/checkPasswordCorrect';
import loginSchema from '@/models/auth/validators/loginSchema';
import logger from '@/server/lib/winstonLogger';
import User from '@/models/user/types/User';

// This controller handles a user login.

export default async function login(body: any): Promise<User | null> {
  try {
    // Validate the body using the defined login schema.
    const validatedBody = await loginSchema.validate(body);

    // Check inputted password is correct.
    await checkPasswordCorrect(
      validatedBody.emailAddress,
      validatedBody.password,
    );

    // Find user in the database by its email address.
    const user = await getUserByEmailAddress(validatedBody.emailAddress);

    // If no user exists return a 404.
    if (!user) {
      throw createError({
        statusCode: 404,
        statusMessage: `Account with email ${validatedBody.emailAddress} does not exist. Please sign up or try again with a different email address.`,
      });
    }

    // Remove unwanted password field.
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: userPassword, ...userWithoutPassword } = user;

    // Return user without the password field.
    return userWithoutPassword;
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error(`Error trying to log in the user:`, error);
    // Rethrow the error to be handled elsewhere if needed
    throw error;
  }
}
