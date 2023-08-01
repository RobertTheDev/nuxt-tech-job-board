import { ObjectId } from 'mongodb';
import { jobPostsCollection } from '../../lib/collections';

export default function deleteJobPostsByCompanyId(companyId: string) {
  return jobPostsCollection.deleteMany({
    companyId: new ObjectId(companyId),
  });
}
