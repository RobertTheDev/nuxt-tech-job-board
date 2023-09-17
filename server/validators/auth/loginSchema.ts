// eslint-disable-next-line import/named
import { string, object, InferType } from 'yup';

const loginSchema = object({
  emailAddress: string()
    .email('Email address must be a valid email format.')
    .required('Email address is required.'),
  password: string().required('Password is required.'),
}).unknown(false);

export type LoginSchemaType = InferType<typeof loginSchema>;

export default loginSchema;
