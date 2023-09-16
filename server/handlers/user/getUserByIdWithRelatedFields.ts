import { ObjectId } from 'mongodb';
import { usersCollection } from '../../lib/mongoDBCollections';

export default async function getUserByIdWithRelatedFields(id: string) {
  const user = await usersCollection
    .aggregate(
      [
        {
          $match: {
            _id: new ObjectId(id),
          },
        },
      ],
      { maxTimeMS: 60000, allowDiskUse: true },
    )
    .toArray();

  if (!user) {
    throw createError({
      statusCode: 404,
      statusMessage: `No user with id ${id} was found.`,
    });
  }

  return user[0];
}
