import { string, date, object } from 'yup';

/* The code is defining a schema for validating user sign-up data. The schema is created using the
`object` function from the `yup` library, which allows you to define a schema for an object with
specific properties and their validation rules. */
const signUpSchema = object({
  createdAt: date().default(() => new Date()),
  emailAddress: string()
    .required('Email address is required.')
    .email('Email address must be a valid email format.')
    .min(1, 'Email address cannot be empty.'),
  emailVerified: string().nullable().default(null),
  firstName: string()
    .required('First name is required.')
    .min(1, 'First name cannot be empty.'),
  lastName: string()
    .required('Last name is required.')
    .min(1, 'Last name cannot be empty.'),
  password: string()
    .required('Password is required.')
    .min(8, 'Password must be at least 8 characters long')
    .matches(/[A-Z]/, 'Password must contain at least one capital letter')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/\d/, 'Password must contain at least one number')
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      'Password must contain at least one special character (e.g., !@#$%^&*()).',
    ),
}).unknown(false);

export default signUpSchema;
