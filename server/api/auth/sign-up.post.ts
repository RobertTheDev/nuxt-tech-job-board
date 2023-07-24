import { usersCollection } from '../../lib/collections';
import { hashPassword } from '../../lib/passwordManagement';
import signUpSchema from '../../validators/auth/signUpSchema';

export default defineEventHandler(async (event) => {
  try {
    // Get the signed in user if it is in session.
    const signedInUser = await event.context.session.user;

    // Return an error is a user is in currently in session.
    if (signedInUser) {
      throw createError({
        statusCode: 400,
        statusMessage:
          'A user is already signed in. Please log out before creating a new account.',
      });
    }

    // Get the request body from user.
    const body = await readBody(event);

    // Destructure password from the request body.
    const { password, ...input } = await signUpSchema.validate(body);

    // Check email is not already in use in db.
    const checkEmailInUse = await usersCollection.findOne({
      emailAddress: body.emailAddress,
    });

    // Return error is email is already in use.
    if (checkEmailInUse) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Email address is already in use.',
      });
    }

    // Hash the password.
    const hashedPassword = await hashPassword(password);

    // Update the input object with the hashed password.
    const userWithHashedPassword = { ...input, password: hashedPassword };

    // Insert the user into the database.
    const signedUpUser = await usersCollection.insertOne(
      userWithHashedPassword,
    );

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: signedUpUserPassword, ...data } = signedUpUser as any;

    // Create session with the signed up user.
    event.context.session.user = data;

    return data;
  } catch (error) {
    return error;
  }
});
