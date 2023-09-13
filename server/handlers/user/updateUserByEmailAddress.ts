import { usersCollection } from '../../lib/collections';
import { UpdateUserSchemaType } from '../../validators/user/updateUserSchema';
import getUserByEmailAddress from './getUserByEmailAddress';

export default async function updateUserByEmailAddress(
  emailAddress: string,
  body: UpdateUserSchemaType,
) {
  // Update the user by its email address with the inputted body.
  await usersCollection.findOneAndUpdate({ emailAddress }, { $set: body });

  // Find and return the updated user by its email address.
  return await getUserByEmailAddress(emailAddress);
}
