import { string, object } from 'yup';

/* The code defines a schema for validating a reset password request. The schema is created using the
`object` function from the `yup` library, which allows you to define a schema for an object with
specific properties. */
const resetPasswordSchema = object({
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

export default resetPasswordSchema;
