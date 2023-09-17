import * as yup from 'yup';

const verifyEmailSchema = yup
  .object({
    emailVerificationToken: yup
      .string()
      .min(
        1,
        'Email verification token must be at least one character in length.',
      )
      .required('Email verification token is required.'),
  })
  .unknown(false);

export type VerifyEmailSchemaType = yup.InferType<typeof verifyEmailSchema>;

export default verifyEmailSchema;
