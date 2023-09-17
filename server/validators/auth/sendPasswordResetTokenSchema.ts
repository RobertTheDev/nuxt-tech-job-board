// eslint-disable-next-line import/named
import { string, object, InferType } from 'yup';

const sendPasswordResetTokenSchema = object({
  emailAddress: string()
    .email('Email address must be in valid email format.')
    .required('Email address is required.'),
}).unknown(false);

export type SendPasswordResetTokenSchemaType = InferType<
  typeof sendPasswordResetTokenSchema
>;

export default sendPasswordResetTokenSchema;
