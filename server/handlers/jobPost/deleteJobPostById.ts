import { ObjectId } from 'mongodb';
import { jobPostsCollection } from '../../lib/collections';

export default async function deleteJobPostById(id: string) {
  // Find and delete the job post by its id.
  return await jobPostsCollection.findOneAndDelete({ _id: new ObjectId(id) });
}
