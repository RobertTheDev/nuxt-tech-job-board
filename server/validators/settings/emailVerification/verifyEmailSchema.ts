import { string, object } from 'yup';

const verifyEmailSchema = object({
  emailVerificationToken: string()
    .min(
      1,
      'Email verification token must be at least one character in length.',
    )
    .required('Email verification token is required.'),
}).unknown(false);

export default verifyEmailSchema;
