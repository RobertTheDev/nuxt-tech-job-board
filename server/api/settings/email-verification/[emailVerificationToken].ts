import verifyEmailAddress from '../../../controllers/settings/verifyEmailAddress';
import verifyEmailSchema from '../../../validators/settings/emailVerification/verifyEmailSchema';

export default defineEventHandler(async (event) => {
  // Get saved job psot id from request params.
  const { emailVerificationToken } = event.context.params as {
    emailVerificationToken: string;
  };

  const validatedBody = await verifyEmailSchema.validate({
    emailVerificationToken,
  });

  return verifyEmailAddress(validatedBody);
});
