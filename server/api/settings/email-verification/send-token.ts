import sendVerificationEmail from '../../../controllers/settings/sendVerificationEmail';
import sendEmailVerificationTokenSchema from '@/models/settings/validators/emailVerification/sendEmailVerificationTokenSchema';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const validatedBody = await sendEmailVerificationTokenSchema.validate(body);

  return sendVerificationEmail(validatedBody);
});
