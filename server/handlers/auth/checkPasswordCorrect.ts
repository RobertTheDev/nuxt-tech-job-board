import { usersCollection } from '../../lib/mongoDBCollections';
import { verifyPassword } from '../../lib/passwordManagement';

export default async function checkPasswordCorrect(
  emailAddress: string,
  inputtedPassword: string,
) {
  const findUser = await usersCollection.findOne({ emailAddress });

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
}
