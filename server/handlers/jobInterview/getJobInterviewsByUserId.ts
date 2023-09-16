import { ObjectId } from 'mongodb';
import { jobInterviewsCollection } from '../../lib/mongoDBCollections';

export default function getJobInterviewsByUserId(userId: string) {
  return jobInterviewsCollection
    .aggregate(
      [
        {
          $match: {
            companyId: new ObjectId(userId),
          },
        },
        {
          $lookup: {
            from: 'jobPosts',
            localField: 'jobInterviews.companyId',
            foreignField: 'companies._id',
            as: 'job-posts',
          },
        },

        {
          $lookup: {
            from: 'users',
            localField: 'users._id',
            foreignField: 'jobInterviews.userId',
            as: 'owners',
          },
        },
      ],

      { maxTimeMS: 60000, allowDiskUse: true },
    )
    .toArray();
}
