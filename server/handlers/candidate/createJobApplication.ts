import { CreateCandidateSchemaType } from '../../validators/candidate/createCandidateSchema';
import { candidatesCollection } from '../../lib/collections';
import getCandidateById from './getCandidateById';

export default async function createCandidate(body: CreateCandidateSchemaType) {
  // Create a candidate.
  const createdCandidate = await candidatesCollection.insertOne(body);

  // Find and return the created candidate.
  return await getCandidateById(createdCandidate.insertedId.toString());
}
