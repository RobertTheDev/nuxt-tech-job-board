import logger from '../../lib/winstonLogger';

// This handler deletes all notifications by their matching job post id.

export default function deleteNotificationsByJobPostId() {
  try {
  } catch (error) {
    // Handle the error, log it, and throw an error.
    logger.error('Error deleting notifications by job post id:', error);
    throw new Error(
      'Could not delete the notifications due to an error. Please try again.',
    );
  }
}
