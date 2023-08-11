import { ObjectId } from 'mongodb';
import { savedJobPostsCollection } from '../../lib/collections';

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
      ],
      // Define fetch settings.
      { maxTimeMS: 60000, allowDiskUse: true },
    )
    .toArray();
}
