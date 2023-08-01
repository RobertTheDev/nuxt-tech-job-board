import * as yup from 'yup';

const loginSchema = yup
  .object({
    emailAddress: yup
      .string()
      .email('Email address must be a valid email format.')
      .required('Email is required.'),
    password: yup.string().required('Password is required.'),
  })
  .unknown(false);

export type LoginSchemaType = yup.InferType<typeof loginSchema>;

export default loginSchema;
