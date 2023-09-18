import { ObjectId } from 'mongodb';
import { savedJobPostsCollection } from '../../../lib/mongoDBCollections';
import logger from '../../../lib/winstonLogger';

// This handler finds and returns a saved job posts by its matching id.
// This handler lookups related job post and user from their collections.

export default async function getSavedJobPostById(id: string) {
  try {
    // Get the saved job post by its id with its related job post fields.
    const savedJobPost = await savedJobPostsCollection
      // Use aggregate function to relate specified collections.
      .aggregate(
        [
          // Get the saved job post by its id.
          {
            $match: {
              _id: new ObjectId(id),
            },
          },
          // Get the saved job post's related job post.
          {
            $lookup: {
              from: 'jobPosts',
              localField: 'jobPostId',
              foreignField: '_id',
              as: 'jobPost',
            },
          },
          // Return a single job post not an array.
          { $unwind: { path: '$jobPost' } },
          // Get the saved job post's related user.
          {
            $lookup: {
              from: 'users',
              localField: 'userId',
              foreignField: '_id',
              as: 'user',
            },
          },
          // Return a single user not an array.
          { $unwind: { path: '$user' } },
          // Remove the password field.
          {
            $project: {
              user: {
                password: 0,
              },
            },
          },
        ],
        // Define fetch settings.
        { maxTimeMS: 60000, allowDiskUse: true },
      )
      .toArray();

    // Return the saved job post.
    return savedJobPost[0];
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error retrieving saved job post by id:', error);
    throw new Error(
      'Could not retrieve the saved job post due to an error. Please try again.',
    );
  }
}
