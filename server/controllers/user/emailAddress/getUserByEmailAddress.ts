import { usersCollection } from '../../../lib/mongoDBCollections';
import logger from '../../../lib/winstonLogger';
import User from '@/models/user/types/User';
// import redisClient from '@/server/db/redis';

// This handler gets a user by their email address.

export default async function getUserByEmailAddress(
  emailAddress: string,
): Promise<User | null> {
  try {
    // Find the user from the database by its email address.
    const userWithoutPassword = await usersCollection
      .find({ emailAddress })
      .project({ password: 0 })
      .toArray();

    // const userFromCache = // Store the user with email address key in the redis cache.
    //   await redisClient.hgetall(emailAddress);

    // if (userFromCache) {
    //   // eslint-disable-next-line @typescript-eslint/no-unused-vars
    //   const { password, ...cachedUser } = userFromCache as unknown as User;

    //   return cachedUser;
    // }

    // Return the user from the array.
    const user = userWithoutPassword[0];

    // If no user is found throw a 404 error.
    if (!user) {
      throw createError({
        statusCode: 404,
        statusMessage: `No user was found with email address ${emailAddress}`,
      });
    }

    // Return the user.
    return user as User;
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error retrieving user by email address:', error);
    // Rethrow the error to be handled elsewhere if needed
    throw error;
  }
}
