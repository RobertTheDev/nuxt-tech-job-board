import { string, object } from 'yup';

/* The code is defining a schema for validating the input data for sending a password reset token. */
const sendPasswordResetTokenSchema = object({
  emailAddress: string()
    .email('Email address must be in valid email format.')
    .min(1, 'Email address cannot be empty.')
    .required('Email address is required.'),
}).unknown(false);

export default sendPasswordResetTokenSchema;
