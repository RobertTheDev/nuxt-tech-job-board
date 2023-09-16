import { usersCollection } from '../../lib/mongoDBCollections';

export default function deleteUsers() {
  // Delete all users from the database.
  return usersCollection.deleteMany();
}
