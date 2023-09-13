import { usersCollection } from '../../lib/collections';

export default async function getUsersWithRelatedFields() {
  return await usersCollection
    .aggregate([], { maxTimeMS: 60000, allowDiskUse: true })
    .toArray();
}
