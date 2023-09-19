import isSignedOut from '@/server/helpers/auth/isSignedOut';
import sendPasswordResetToken from '@/server/controllers/auth/passwordReset/sendPasswordResetToken';

// This route sends a password reset email if user has forgotten password.

export default defineEventHandler(async (event) => {
  try {
    // Helpers checks to see if user is not already signed in.
    await isSignedOut(event);

    // Get body from the request.
    const body = await readBody(event);

    // Use the send sendPasswordResetToken controller to send the token.
    return sendPasswordResetToken(body);
  } catch (error) {
    // If an error occurs return it.
    return error;
  }
});
