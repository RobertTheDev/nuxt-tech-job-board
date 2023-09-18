import logger from '../../lib/winstonLogger';
import { LoginSchemaType } from '../../validators/auth/loginSchema';
import findUserByEmailAddress from './findUserByEmailAddress';

// This handler handles a user login.

export default async function login(body: LoginSchemaType) {
  try {
    // Find user in the database by its email address.
    const user = await findUserByEmailAddress(body.emailAddress);

    // Remove unwanted password field.
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: userPassword, ...userWithoutPassword } = user;

    // Return user without the password field.
    return userWithoutPassword;
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error(`Error trying to log in the user:`, error);
    throw new Error(
      `Could not login the user due to an error. Please try again.`,
    );
  }
}
