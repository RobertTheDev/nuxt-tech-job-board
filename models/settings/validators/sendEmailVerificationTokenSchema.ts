import * as yup from 'yup';

const sendEmailVerificationTokenSchema = yup
  .object({
    emailAddress: yup
      .string()
      .email('Email address must be a valid email format.')
      .required('Please provide a new email address.'),
  })
  .unknown(false);

export type SendEmailVerificationTokenSchemaType = yup.InferType<
  typeof sendEmailVerificationTokenSchema
>;

export default sendEmailVerificationTokenSchema;
