import { ObjectId } from 'mongodb';
import { savedJobPostsCollection } from '../../lib/collections';

export default function deleteSavedJobPostsByCompanyId(companyId: string) {
  // Delete saved job posts by their company id from the database.
  return savedJobPostsCollection.deleteMany({
    companyId: new ObjectId(companyId),
  });
}
