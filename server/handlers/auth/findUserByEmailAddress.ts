import { usersCollection } from '../../lib/collections';

export default async function findUserByEmailAddress(emailAddress: string) {
  // Find user in the database by its email address.
  const user = await usersCollection.findOne({
    emailAddress,
  });

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
