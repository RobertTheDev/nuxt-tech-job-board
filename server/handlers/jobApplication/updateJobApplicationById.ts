import { ObjectId } from 'mongodb';
import { UpdateJobApplicationSchemaType } from '../../validators/jobApplication/updateJobApplicationSchema';
import { jobApplicationsCollection } from '../../lib/mongoDBCollections';
import getJobApplicationById from './getJobApplicationById';

export default async function updateJobApplicationById(
  id: string,
  body: UpdateJobApplicationSchemaType,
) {
  // Update the job application by its id with the inputted body.
  await jobApplicationsCollection.findOneAndUpdate(
    { _id: new ObjectId(id) },
    { $set: body },
  );

  // Find and return the updated job application by its id.
  return await getJobApplicationById(id);
}
