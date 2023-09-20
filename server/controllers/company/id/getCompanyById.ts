import { ObjectId } from 'mongodb';
import { companiesCollection } from '../../../lib/mongoDBCollections';
import logger from '../../../lib/winstonLogger';
import Company from '@/models/company/types/Company';

// This handler gets the company by its id.

export default async function getCompanyById(id: string): Promise<Company> {
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
    return company[0] as Company;
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error getting company by id:', error);
    // Rethrow the error to be handled elsewhere if needed
    throw error;
  }
}
