import { ObjectId } from 'mongodb';
import isAuthenticated from '@/server/helpers/auth/isAuthenticated';
import { usersCollection } from '@/server/lib/mongoDBCollections';
import User from '@/models/user/types/User';
import updateUserSchema from '@/models/user/validators/updateUserSchema';

export default defineEventHandler(async (event) => {
  // Define the request method.
  const { method } = event.node.req;

  // This method finds and returns all the app's users.
  if (method === 'GET') {
    // Check to user is authenticated.

    try {
      // Check user is signed in.
      await isAuthenticated(event);

      // Returns the user data.
      return (await usersCollection.findOne({
        _id: new ObjectId(event.context.session.user._id),
      })) as User | null;
    } catch (error) {
      // If error occurs return an error.
      return error;
    }
  }
  if (method === 'PUT') {
    // Check to user is authenticated.

    try {
      // Check user is signed in.
      await isAuthenticated(event);

      // Get body from the request.
      const body = await readBody(event);

      const validatedBody = await updateUserSchema.validate(body);

      await usersCollection.findOneAndUpdate(
        { _id: new ObjectId(event.context.session.user._id) },
        {
          $set: validatedBody,
        },
      );

      // Returns the user data.
      return (await usersCollection.findOne({
        _id: new ObjectId(event.context.session.user._id),
      })) as User | null;
    } catch (error) {
      // If error occurs return an error.
      return error;
    }
  }
});
