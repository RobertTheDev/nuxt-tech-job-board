import logger from '../../lib/winstonLogger';

// This handler deletes a notification by its id.

export default function deleteNotificationById() {
  try {
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error deleting notification by id:', error);
    throw new Error(
      'Could not delete the notification due to an error. Please try again.',
    );
  }
}
