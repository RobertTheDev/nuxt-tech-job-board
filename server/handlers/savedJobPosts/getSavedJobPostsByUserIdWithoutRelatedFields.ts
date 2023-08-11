import { ObjectId } from 'mongodb';
import { savedJobPostsCollection } from '../../lib/collections';

export default async function getSavedJobPostsWithoutRelatedFields(
  userId: string,
) {
  // Return the saved job posts by user id.
  return await savedJobPostsCollection
    .find({ userId: new ObjectId(userId) })
    .toArray();
}
