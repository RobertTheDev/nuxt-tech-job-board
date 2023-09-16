import { ObjectId } from 'mongodb';
import { usersCollection } from '../../lib/mongoDBCollections';
import { UpdateUserSchemaType } from '../../validators/user/updateUserSchema';
import getUserById from './getUserById';

export default async function updateUserById(
  id: string,
  body: UpdateUserSchemaType,
) {
  // Update the user by its id with the inputted body.
  await usersCollection.findOneAndUpdate(
    { _id: new ObjectId(id) },
    { $set: body },
  );

  // Find and return the updated user by its id.
  return await getUserById(id);
}
