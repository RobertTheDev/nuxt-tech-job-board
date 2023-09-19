import { hash, verify } from 'argon2';
import logger from '@/server/lib/winstonLogger';

// These helpers manage passwords in the app using argon2 for hashing and verifying.

// Use argon2 to Hash the passowrd.

export async function hashPassword(password: string): Promise<string> {
  try {
    // Hash the user's password using argon2.
    return await hash(password);
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error(`Error trying to hash the user's password: `, error);

    // Rethrow the error to be handled elsewhere if needed
    throw error;
  }
}

// Use argon2 to verify the password is correct.

export async function verifyPassword(
  password: string,
  hashedPassword: string,
): Promise<boolean> {
  try {
    // Verify the user's password using argon2.
    return await verify(password, hashedPassword);
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error(`Error trying to verify the user's password: `, error);

    // Rethrow the error to be handled elsewhere if needed
    throw error;
  }
}
