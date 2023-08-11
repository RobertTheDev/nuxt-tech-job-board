import { ObjectId } from 'mongodb';
import { savedJobPostsCollection } from '../../lib/collections';

// This handler finds and returns all saved job posts by its matching id.
// This handler lookups related job post and user from their collections.

export default async function getSavedJobPostsWithoutRelatedFields(
  userId: string,
) {
  // Return the saved job posts by user id.
  return await savedJobPostsCollection
    .find({ userId: new ObjectId(userId) })
    .toArray();
}
