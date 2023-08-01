import { usersCollection } from '../../lib/collections';

export default function deleteUsers() {
  // Delete all users from the database.
  return usersCollection.deleteMany();
}
