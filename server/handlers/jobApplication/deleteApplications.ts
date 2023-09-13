import { applicationsCollection } from '../../lib/collections';

export default function deleteApplications() {
  // Find and delete all applications.
  return applicationsCollection.deleteMany();
}
