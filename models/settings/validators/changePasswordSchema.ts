import { object, date, string, ref } from 'yup';

const changePasswordSchema = object({
  updatedAt: date().default(() => new Date()),
  currentPassword: string().required('Password is required.'),
  newPassword: string()
    .notOneOf(
      [ref('currentPassword')],
      'New password must be different from the current password.',
    )
    .required('New password is required.')
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

export default changePasswordSchema;
