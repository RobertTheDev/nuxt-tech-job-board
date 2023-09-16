import * as yup from 'yup';

const resetPasswordSchema = yup
  .object({
    resetPasswordToken: yup
      .string()
      .required('A reset password token is required.')
      .min(1, 'Reset password token must be at least 1 character long.'),
    password: yup
      .string()
      .min(8, 'Password must be at least 8 characters long')
      .matches(/[A-Z]/, 'Password must contain at least one capital letter')
      .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
      .matches(/\d/, 'Password must contain at least one number')
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        'Password must contain at least one special character',
      )
      .required('Password is required.'),
  })
  .unknown(false);

export type ResetPasswordSchemaType = yup.InferType<typeof resetPasswordSchema>;

export default resetPasswordSchema;
