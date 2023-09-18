import logger from '../../lib/winstonLogger';

// This handler deletes all notifications by their matching user id.

export default function deleteNotificationsByUserId() {
  try {
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error deleting notifications by user id:', error);
    throw new Error(
      'Could not delete the notifications due to an error. Please try again.',
    );
  }
}
