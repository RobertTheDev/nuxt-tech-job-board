import { usersCollection } from '../../lib/mongoDBCollections';
import { verifyPassword } from '../../lib/passwordManagement';
import logger from '../../lib/winstonLogger';

// This handler checks if password entered by user is correct.

export default async function checkPasswordCorrect(
  emailAddress: string,
  inputtedPassword: string,
) {
  try {
    // Find user by email address.
    const findUser = await usersCollection.findOne({ emailAddress });

    // Throw 404 error is user not found.
    if (!findUser) {
      throw createError({
        statusCode: 404,
        statusMessage: `The user with email ${emailAddress} does not exist in the database.`,
      });
    }

    // Verify inputted password with the actual password in the database.
    const checkPassword = await verifyPassword(
      findUser.password,
      inputtedPassword,
    );

    // Return 401 error if password is incorrect.
    if (!checkPassword) {
      throw createError({
        statusCode: 401,
        statusMessage: 'The password you entered is incorrect.',
      });
    }
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error(`Error checking if user's password is correct:`, error);
    // Rethrow the error to be handled elsewhere if needed
    throw error;
  }
}
