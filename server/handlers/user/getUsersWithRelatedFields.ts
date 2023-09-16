import { usersCollection } from '../../lib/mongoDBCollections';

export default async function getUsersWithRelatedFields() {
  return await usersCollection
    .aggregate([], { maxTimeMS: 60000, allowDiskUse: true })
    .toArray();
}
