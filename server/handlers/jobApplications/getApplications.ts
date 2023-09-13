import { applicationsCollection } from '../../lib/collections';

export default function getApplications() {
  // Find applications.
  return applicationsCollection.find();
}
