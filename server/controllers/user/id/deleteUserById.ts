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

// This handler finds and deletes a user by its id.

export default async function deleteUserById(
  id: string,
): Promise<DeleteResult> {
  try {
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
    logger.error('Error deleting user by id:', error);
    // Rethrow the error to be handled elsewhere if needed
    throw error;
  }
}
