import * as yup from 'yup';

const sendVerificationCodeSchema = yup
  .object({
    emailAddress: yup
      .string()
      .email('Email address must be a valid email format.')
      .required('Please provide a new email address.'),
  })
  .unknown(false);

export type SendVerificationCodeSchemaType = yup.InferType<
  typeof sendVerificationCodeSchema
>;

export default sendVerificationCodeSchema;
