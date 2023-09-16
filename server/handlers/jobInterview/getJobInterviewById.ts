import { ObjectId } from 'mongodb';
import { jobInterviewsCollection } from '../../lib/mongoDBCollections';

export default async function getJobInterviewById(id: string) {
  const jobInterview = await jobInterviewsCollection
    .aggregate(
      [
        {
          $match: {
            _id: new ObjectId(id),
          },
        },
      ],
      { maxTimeMS: 60000, allowDiskUse: true },
    )
    .toArray();

  return jobInterview[0];
}
