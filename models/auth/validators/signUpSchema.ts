import { string, date, object } from 'yup';

/* The code defines a schema for signing up a user. It uses the `yup` library to define validation
rules for each field in the schema. */
const signUpSchema = object({
  createdAt: date().default(() => new Date()),
  emailAddress: string()
    .email('Email address must be a valid email format.')
    .min(1, 'Email address cannot be empty.')
    .required('Email address is required.'),
  emailVerified: string().nullable().default(null),
  firstName: string()
    .min(1, 'First name cannot be empty.')
    .required('First name is required.'),
  lastName: string()
    .min(1, 'Last name cannot be empty.')
    .required('Last name is required.'),
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

export default signUpSchema;
