import { usersCollection } from '../../lib/mongoDBCollections';
import { hashPassword } from '../../lib/passwordManagement';
import { SignUpSchemaType } from '../../validators/auth/signUpSchema';
import findUserById from './findUserById';

export default async function signUp(body: SignUpSchemaType) {
  // Destructure password from the validated body.
  const { password, ...input } = body;

  // Hash the password.
  const hashedPassword = await hashPassword(password);

  // Update the input object with the hashed password.
  const userWithHashedPassword = {
    ...input,
    password: hashedPassword,
  };

  // Insert the created user into the database.
  const createdUser = await usersCollection.insertOne(userWithHashedPassword);

  // Find the created user from the database by id.
  // Return signed up user.
  return await findUserById(createdUser.insertedId.toString());
}
