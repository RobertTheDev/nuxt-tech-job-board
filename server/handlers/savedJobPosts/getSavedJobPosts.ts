import { savedJobPostsCollection } from '../../lib/collections';

// This handler finds and returns all saved job posts.
// This handler lookups related job post and user from their collections.

export default async function getSavedJobPosts() {
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
