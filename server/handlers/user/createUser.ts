import { ObjectId } from 'mongodb';
import { usersCollection } from '../../lib/collections';
import { CreateUserSchemaType } from '../../validators/user/createUserSchema';
import getUserById from './getUserById';

export default async function createUser(
  id: string,
  body: CreateUserSchemaType,
) {
  // Create the user with the inputted body.
  await usersCollection.findOneAndUpdate(
    { _id: new ObjectId(id) },
    { $set: body },
  );

  // Find and return the created user by its id.
  return await getUserById(id);
}
