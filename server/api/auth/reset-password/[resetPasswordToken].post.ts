import resetPassword from '../../../controllers/auth/passwordReset/resetPassword';
import resetPasswordSchema from '../../../validators/auth/resetPasswordSchema';

export default defineEventHandler(async (event) => {
  // Get saved job psot id from request params.
  const { resetPasswordToken } = event.context.params as {
    resetPasswordToken: string;
  };

  const body = await readBody(event);

  const validatedBody = await resetPasswordSchema.validate({
    resetPasswordToken,
    password: body.password,
  });

  return resetPassword(validatedBody);
});
