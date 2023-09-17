import * as yup from 'yup';

const verifyEmailSchema = yup
  .object({
    emailAddress: yup
      .string()
      .email('Email address must be a valid email format.')
      .required('Please provide a new email address.'),
    verificationCode: yup
      .string()
      .min(1, 'Verification code must be at least one character in length.')
      .required('Please provide a new email address.'),
  })
  .unknown(false);

export type VerifyEmailSchemaType = yup.InferType<typeof verifyEmailSchema>;

export default verifyEmailSchema;
