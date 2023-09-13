import { ObjectId } from 'mongodb';
import { companyFollowersCollection } from '../../lib/collections';

// This handler finds and returns all company followers by its matching id.
// This handler lookups related company and user from their collections.

export default async function getCompanyFollowerById(id: string) {
  // Get the company follower by its matching id.
  return await companyFollowersCollection
    .aggregate(
      [
        // Get the company follower by its matching id.
        {
          $match: {
            _id: new ObjectId(id),
          },
        },
        // Get the company follower's related user.
        {
          $lookup: {
            from: 'users',
            localField: 'userId',
            foreignField: '_id',
            as: 'user',
          },
        },
        // Return a single user not an array.
        { $unwind: { path: '$user' } },
        // Remove the password field.
        {
          $project: {
            user: {
              password: 0,
            },
          },
        },
        // Get the company follower's related company.
        {
          $lookup: {
            from: 'companies',
            localField: 'companyId',
            foreignField: '_id',
            as: 'company',
          },
        },
        // Return a single company not an array.
        { $unwind: { path: '$company' } },
      ],
      // Define fetch settings.
      { maxTimeMS: 60000, allowDiskUse: true },
    )
    .toArray();
}
