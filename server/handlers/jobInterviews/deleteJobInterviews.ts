import { jobInterviewsCollection } from '../../lib/collections';

export default async function deleteJobInterviews() {
  // Delete all the job interviews.
  return await jobInterviewsCollection.deleteMany();
}
