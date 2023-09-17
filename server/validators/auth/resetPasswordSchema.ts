// eslint-disable-next-line import/named
import { string, object, InferType } from 'yup';

const resetPasswordSchema = object({
  resetPasswordToken: string()
    .required('A reset password token is required.')
    .min(1, 'Reset password token must be at least 1 character long.'),
  password: string()
    .min(8, 'Password must be at least 8 characters long')
    .matches(/[A-Z]/, 'Password must contain at least one capital letter')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/\d/, 'Password must contain at least one number')
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      'Password must contain at least one special character',
    )
    .required('Password is required.'),
}).unknown(false);

export type ResetPasswordSchemaType = InferType<typeof resetPasswordSchema>;

export default resetPasswordSchema;
