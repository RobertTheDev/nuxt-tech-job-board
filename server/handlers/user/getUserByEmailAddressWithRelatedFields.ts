import { usersCollection } from '../../lib/mongoDBCollections';

export default async function getUserByEmailAddressWithRelatedFields(
  emailAddress: string,
) {
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
}
