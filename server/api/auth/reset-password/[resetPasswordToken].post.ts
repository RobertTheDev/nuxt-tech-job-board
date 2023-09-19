import isSignedOut from '@/server/helpers/auth/isSignedOut';
import resetPasswordWithToken from '@/server/controllers/auth/passwordReset/resetPasswordWithToken';

// This route resets the user's password using a password reset token.

export default defineEventHandler(async (event) => {
  try {
    // Helpers checks to see if user is not already signed in.
    await isSignedOut(event);

    // Get reset password token from request params.
    const { resetPasswordToken } = event.context.params as {
      resetPasswordToken: string;
    };

    // Get body from the request.
    const body = await readBody(event);

    // Use the send resetPassword controller to reset the user's password.
    return await resetPasswordWithToken(body, resetPasswordToken);
  } catch (error) {
    // If an error occurs return it.
    return error;
  }
});
