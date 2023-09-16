import { ObjectId } from 'mongodb';
import { usersCollection } from '../../lib/collections';
import { ChangeEmailSchemaType } from '../../validators/auth/changeEmailSchema';
import findUserById from '../auth/findUserById';

export default async function changeEmail(
  id: string,
  body: ChangeEmailSchemaType,
) {
  // Update the user by its id.
  await usersCollection.findOneAndUpdate(
    {
      _id: new ObjectId(id),
    },
    { $set: { emailAddress: body.newEmailAddress, updatedAt: body.updatedAt } },
  );
  // Get the updated user by its id.
  const updatedUser = await findUserById(id.toString());

  // Remove unwanted password field.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { password, ...userWithoutPassword } = updatedUser;

  // Return user without password.
  return userWithoutPassword;
}
