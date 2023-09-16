import * as yup from 'yup';

const sendPasswordResetTokenSchema = yup
  .object({
    emailAddress: yup
      .string()
      .email('Email address must be in valid email format.')
      .required('Email is required.'),
  })
  .unknown(false);

export type SendPasswordResetTokenSchemaType = yup.InferType<
  typeof sendPasswordResetTokenSchema
>;

export default sendPasswordResetTokenSchema;
