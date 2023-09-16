import { jobInterviewsCollection } from '../../lib/mongoDBCollections';

export default async function deleteJobInterviews() {
  // Delete all the job interviews.
  return await jobInterviewsCollection.deleteMany();
}
