import { ObjectId } from 'mongodb';
import { jobApplicationsCollection } from '../../lib/mongoDBCollections';

export default async function getJobApplicationById(id: string) {
  // Find and return the job application by its id.
  return await jobApplicationsCollection.findOne({ _id: new ObjectId(id) });
}
