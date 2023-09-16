import { usersCollection } from '../../lib/mongoDBCollections';

export default async function checkEmailIsTaken(emailAddress: string) {
  // Check email is not already in use in the database.
  const checkEmailInUse = await usersCollection.findOne({
    emailAddress,
  });

  // Return 400 error if email is already in use.
  if (checkEmailInUse) {
    throw createError({
      statusCode: 400,
      statusMessage:
        'Email address is already in use please try a different email address.',
    });
  }
}
