import { usersCollection } from '../../lib/mongoDBCollections';
import logger from '../../lib/winstonLogger';

export default async function getUserByEmailAddressWithRelatedFields(
  emailAddress: string,
) {
  try {
    const user = await usersCollection
      .aggregate(
        [
          {
            $match: {
              emailAddress,
            },
          },
        ],
        { maxTimeMS: 60000, allowDiskUse: true },
      )
      .toArray();

    if (!user) {
      throw createError({
        statusCode: 404,
        statusMessage: `No user with email address ${emailAddress} was found.`,
      });
    }

    return user[0];
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error(
      'Error retrieving user by email address with related fields:',
      error,
    );
    throw new Error(
      'Could not retrieve the user due to an error. Please try again.',
    );
  }
}
