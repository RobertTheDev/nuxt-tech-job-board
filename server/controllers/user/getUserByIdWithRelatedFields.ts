import { ObjectId } from 'mongodb';
import { usersCollection } from '../../lib/mongoDBCollections';
import logger from '../../lib/winstonLogger';

export default async function getUserByIdWithRelatedFields(id: string) {
  try {
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
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error retrieving user by id with related fields:', error);
    throw new Error(
      'Could not retrieve the user due to an error. Please try again.',
    );
  }
}
