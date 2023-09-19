import logger from '../../lib/winstonLogger';
import loginSchema from '../../validators/auth/loginSchema';
import getUserByEmailAddress from '../user/getUserByEmailAddress';

// This handler handles a user login.

export default async function login(body: any) {
  try {
    // Validate the body.
    const validatedBody = await loginSchema.validate(body);

    // Find user in the database by its email address.
    const user = await getUserByEmailAddress(validatedBody.emailAddress);

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
