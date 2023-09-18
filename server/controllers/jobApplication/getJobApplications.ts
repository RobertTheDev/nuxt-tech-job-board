import { Document } from 'mongodb';
import { jobApplicationsCollection } from '../../lib/mongoDBCollections';
import logger from '../../lib/winstonLogger';

// This handler finds and returns all the app's job applications from mongoDB.

export default async function getJobApplications(): Promise<Document[]> {
  try {
    // Find and return all job applications.
    return await jobApplicationsCollection.find().toArray();
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error retrieving job applications:', error);
    throw new Error(
      'Could not retrieve job applications due to an error. Please try again.',
    );
  }
}
