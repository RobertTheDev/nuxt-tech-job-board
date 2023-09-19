import { object, date, string } from 'yup';

const changeEmailSchema = object({
  updatedAt: date().default(() => new Date()),
  newEmailAddress: string()
    .email('Email address must be a valid email format.')
    .required('Please provide a new email address.'),
  password: string().required('Password is required.'),
}).unknown(false);

export default changeEmailSchema;
