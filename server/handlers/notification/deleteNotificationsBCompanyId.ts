import logger from '../../lib/winstonLogger';

// This handler deletes a notification by its id.

export default function deleteNotificationsByCompanyId() {
  try {
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error deleting notifications by company id:', error);
    throw new Error(
      'Could not delete the notifications due to an error. Please try again.',
    );
  }
}
