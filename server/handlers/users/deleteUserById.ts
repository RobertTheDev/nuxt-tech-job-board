import { ObjectId } from 'mongodb';
import { usersCollection } from '../../lib/collections';

export default function deleteUserById(id: string) {
  // Delete user by its id from the database.
  return usersCollection.findOneAndDelete({
    _id: new ObjectId(id),
  });
}