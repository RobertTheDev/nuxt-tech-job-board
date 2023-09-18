import { DeleteResult, ObjectId } from 'mongodb';
import {
  companyFollowersCollection,
  companyOwnersCollection,
  jobApplicationsCollection,
  jobInterviewsCollection,
  savedJobPostsCollection,
  usersCollection,
} from '../../../lib/mongoDBCollections';
import logger from '../../../lib/winstonLogger';
import getUserByEmailAddress from './getUserByEmailAddress';
import User from '@/models/user/types/User';

// This handler finds and deletes a user by its email address.

export default async function deleteUserById(
  emailAddress: string,
): Promise<DeleteResult> {
  try {
    // Call get user by email address to get the user's id.
    const getUser = (await getUserByEmailAddress(emailAddress)) as User;

    // Get the id from the user.
    const { _id: id } = getUser;

    // Ensure no companies the user owns exists before deleting account.
    const findOwnedCompanies = companyOwnersCollection.find({
      userId: new ObjectId(id),
    });

    // Ensure user has deleted all companies founded on app before closing account.
    if (findOwnedCompanies) {
      throw createError({
        statusCode: 400,
        statusMessage: `You must delete all your companies before closing your account.`,
      });
    }

    // Cancel all active job interviews booked booked by user.
    await jobInterviewsCollection.updateMany(
      {
        userId: new ObjectId(id),
        status: { $ne: 'CANCELLED' }, // Match all statuses except 'CANCELLED'
      },
      {
        $set: { status: 'CANCELLED' }, // Update the status to 'CANCELLED'
      },
    );

    // Delete all company followers with matching user id.
    await companyFollowersCollection.deleteMany({ userId: new ObjectId(id) });

    // Delete all saved job posts with matching user id.
    await savedJobPostsCollection.deleteMany({ userId: new ObjectId(id) });

    // Delete all job applications with matching user id.
    await jobApplicationsCollection.deleteMany({ userId: new ObjectId(id) });

    // Delete user by its id from the database.
    return await usersCollection.deleteOne({ _id: new ObjectId(id) });
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error deleting user by email address:', error);
    // Rethrow the error to be handled elsewhere if needed
    throw error;
  }
}
