import { ObjectId } from 'mongodb';
import { savedJobPostsCollection } from '../../lib/collections';

export default async function getSavedJobPostById(id: string) {
  // Get the saved jobs by its id from the database.
  return await savedJobPostsCollection.findOne({
    _id: new ObjectId(id),
  });
}
