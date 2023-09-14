import { ObjectId } from 'mongodb';
import { jobApplicationsCollection } from '../../lib/collections';

export default function deleteJobApplicationById(id: string) {
  // Find and delete job application by its id.
  return jobApplicationsCollection.findOneAndDelete({
    _id: new ObjectId(id),
  });
}
