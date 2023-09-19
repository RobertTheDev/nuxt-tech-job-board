import { string, object } from 'yup';

const sendEmailVerificationTokenSchema = object({
  emailAddress: string()
    .email('Email address must be a valid email format.')
    .required('Please provide a new email address.'),
}).unknown(false);

export default sendEmailVerificationTokenSchema;
