import { ObjectId } from 'mongodb';
import { usersCollection } from '../../lib/collections';

export default async function findUserById(id: string) {
  // Find user in the database by its id.
  const findUser = await usersCollection
    .find({
      _id: new ObjectId(id),
    })
    .project({ password: 0 })
    .toArray();

  const user = findUser[0];

  // Return 404 if no user exists in the database.
  if (!user) {
    throw createError({
      statusCode: 404,
      statusMessage: 'No user was found in the database.',
    });
  }

  // Return the user.
  return user;
}
