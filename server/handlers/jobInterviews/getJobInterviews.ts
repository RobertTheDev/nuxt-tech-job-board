import { jobInterviewsCollection } from '../../lib/collections';

export default function getJobInterviews() {
  return jobInterviewsCollection
    .aggregate(
      [
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
