import { ObjectId } from 'mongodb';
import { savedJobPostsCollection } from '../../lib/collections';

export default async function getSavedJobPostsByUserId(userId: string) {
  // Get the saved jobs by their user id from the database.
  return await savedJobPostsCollection.findOne({
    userId: new ObjectId(userId),
  });
}
