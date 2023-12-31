import { Document } from 'mongodb';
import { savedJobPostsCollection } from '../../lib/mongoDBCollections';
import logger from '../../lib/winstonLogger';

// This handler finds and returns all the app's saved job posts from mongoDB.

export default async function getSavedJobPosts(): Promise<Document[]> {
  try {
    // Finds and returns all the app's saved job posts from mongoDB.
    // Return the saved job posts with their related job post fields.
    return await savedJobPostsCollection
      // Use aggregate function to relate specified collections.
      .aggregate(
        [
          // Get the saved job posts's related job post.
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
          // Get the saved job posts' related company.
          {
            $lookup: {
              from: 'companies',
              localField: 'companies._id',
              foreignField: 'jobPosts.companyId',
              as: 'company',
            },
          },
          // Return a single company not an array.
          {
            $unwind: '$company',
          },
          // Add a new field "jobPost.company" and merge the company information
          {
            $addFields: {
              'jobPost.company': '$company',
            },
          },

          // Remove the separate "company" field
          {
            $project: {
              company: 0,
            },
          },
          // Get the saved job posts' related user.
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
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error retrieving saved job posts:', error);
    throw new Error(
      'Could not retrieve saved job posts due to an error. Please try again.',
    );
  }
}
