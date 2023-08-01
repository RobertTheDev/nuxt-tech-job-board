import { usersCollection } from '../../lib/collections';

export default function getUsers() {
  // Find and returns all users and removes password field from the database.
  return usersCollection.find().project({ password: 0 }).toArray();
}
