import { ObjectId } from 'mongodb';
import { jobInterviewsCollection } from '../../lib/mongoDBCollections';

export default function getJobInterviewsByJobPostId(jobPostId: string) {
  return jobInterviewsCollection
    .aggregate(
      [
        {
          $match: {
            companyId: new ObjectId(jobPostId),
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
