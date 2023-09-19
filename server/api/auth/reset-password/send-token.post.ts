import sendPasswordResetToken from '../../../controllers/auth/passwordReset/sendPasswordResetToken';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  return sendPasswordResetToken(body);
});
