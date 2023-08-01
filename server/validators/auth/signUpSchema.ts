import * as yup from 'yup';

const signUpSchema = yup
  .object({
    createdAt: yup.date().default(() => new Date()),
    emailAddress: yup
      .string()
      .email('Email address must be a valid email format.')
      .required('Email is required.'),
    firstName: yup.string().required('First name is required.'),
    lastName: yup.string().required('Last name is required.'),
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

export type SignUpSchemaType = yup.InferType<typeof signUpSchema>;

export default signUpSchema;
