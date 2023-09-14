import { ObjectId } from 'mongodb';
import { candidatesCollection } from '../../lib/collections';
import { UpdateCandidateSchemaType } from '../../validators/candidate/updateCandidateSchema';
import getCandidateById from './getCandidateById';

export default async function updateCandidateById(
  id: string,
  body: UpdateCandidateSchemaType,
) {
  // Update the candidate by its id with the inputted body.
  await candidatesCollection.findOneAndUpdate(
    { _id: new ObjectId(id) },
    { $set: body },
  );

  // Find and return the updated candidate by its id.
  return await getCandidateById(id);
}
