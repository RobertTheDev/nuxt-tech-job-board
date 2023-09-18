import { ObjectId, Document } from 'mongodb';
import { companiesCollection } from '../../../lib/mongoDBCollections';
import logger from '../../../lib/winstonLogger';

// This handler gets the company by its id.

export default async function getCompanyById(
  id: string,
): Promise<Document | null> {
  try {
    // Gets company bu its id and uses agregation to get related fields.
    const company = await companiesCollection
      .aggregate(
        [
          // Get company by id.
          {
            $match: {
              _id: new ObjectId(id),
            },
          },
          // Lookup the company's  related job posts.
          {
            $lookup: {
              from: 'jobPosts',
              localField: '_id',
              foreignField: 'companyId',
              as: 'jobPosts',
            },
          },
          // Lookup the company's  related company owners.
          {
            $lookup: {
              from: 'companyOwners',
              localField: '_id',
              foreignField: 'companyId',
              as: 'findCompanyOwners',
            },
          },
          // Unwind to lookup the company owners related user.
          { $unwind: { path: '$findCompanyOwners' } },
          // Lookup the company owners related user.
          {
            $lookup: {
              from: 'users',
              localField: 'findCompanyOwners.userId',
              foreignField: '_id',
              as: 'owners',
            },
          },
        ],
        // Default settings.
        { maxTimeMS: 60000, allowDiskUse: true },
      )
      .toArray();

    // Return a 404 if no company is found.
    if (!company) {
      throw createError({
        statusCode: 404,
        statusMessage: `No company with id ${id} was found.`,
      });
    }
    // Return company from the aggregated array
    return company[0];
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error retrieving company by id:', error);
    throw new Error(
      'Could not retrieve the company due to an error. Please try again.',
    );
  }
}
