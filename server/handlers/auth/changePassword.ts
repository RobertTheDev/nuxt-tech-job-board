import { ObjectId } from 'mongodb';
import { usersCollection } from '../../lib/collections';
import { hashPassword } from '../../lib/passwordManagement';
import { ChangePasswordSchemaType } from '../../validators/auth/changePasswordSchema';
import findUserById from './findUserById';

export default async function changePassword(
  id: string,
  body: ChangePasswordSchemaType,
) {
  const hashedPassword = await hashPassword(body.newPassword);

  // Update the user by its id.
  await usersCollection.findOneAndUpdate(
    {
      _id: new ObjectId(id),
    },
    { $set: { password: hashedPassword } },
  );

  // Return the user without password field.
  return await findUserById(id);
}
