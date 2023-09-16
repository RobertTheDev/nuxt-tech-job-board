import { ObjectId } from 'mongodb';
import { savedJobPostsCollection } from '../../lib/mongoDBCollections';

// This handler finds and returns all saved job posts by their matching user id.
// This handler lookups related job post and user from their collections.

export default async function getSavedJobPostsByUserId(userId: string) {
  // Get the saved job post by their user id with their related job post fields.
  return await savedJobPostsCollection
    // Use aggregate function to relate specified collections.
    .aggregate(
      [
        // Get the saved job posts by their user id.
        {
          $match: {
            userId: new ObjectId(userId),
          },
        },
        // Get the saved job posts' related job post.
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
}
