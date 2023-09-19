import sendVerificationEmail from '../../../controllers/settings/sendVerificationEmail';
import sendEmailVerificationTokenSchema from '../../../validators/settings/emailVerification/sendEmailVerificationTokenSchema';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const validatedBody = await sendEmailVerificationTokenSchema.validate(body);

  return sendVerificationEmail(validatedBody);
});
