import { usersCollection } from '../../lib/collections';
import { verifyPassword } from '../../lib/passwordManagement';

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { password, emailAddress } = body; // Destructure password and other properties from the request body

    const findUser = await usersCollection.findOne({ emailAddress });

    if (!findUser) {
      throw createError({
        statusCode: 404,
        statusMessage: 'No user was found in the database.',
      });
    }

    // Hash the password
    const verifyUser = await verifyPassword(findUser.password, password);

    if (!verifyUser) {
      throw createError({
        statusCode: 401,
        statusMessage:
          'Passwords do not match. The password entered is incorrect.',
      });
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: userPassword, ...user } = findUser;

    event.context.session.user = user;

    return findUser;
  } catch (error) {
    return error;
  }
});
