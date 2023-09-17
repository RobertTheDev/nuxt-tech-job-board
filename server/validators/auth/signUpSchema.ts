// eslint-disable-next-line import/named
import { string, number, date, object, InferType } from 'yup';

const signUpSchema = object({
  createdAt: date().default(() => new Date()),
  emailAddress: string()
    .email('Email address must be a valid email format.')
    .required('Email address is required.'),
  emailVerified: string().default(null),
  firstName: string().required('First name is required.'),
  lastName: string().required('Last name is required.'),
  companiesFollowed: number().notRequired().default(0),
  companiesOwned: number().notRequired().default(0),
  jobPostsApplied: number().notRequired().default(0),
  jobPostsSaved: number().notRequired().default(0),
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

export type SignUpSchemaType = InferType<typeof signUpSchema>;

export default signUpSchema;
