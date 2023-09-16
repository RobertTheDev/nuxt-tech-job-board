import { ObjectId } from 'mongodb';
import { jobPostsCollection } from '../../lib/mongoDBCollections';

export default function deleteJobPostsByCompanyId(companyId: string) {
  return jobPostsCollection.deleteMany({
    companyId: new ObjectId(companyId),
  });
}
