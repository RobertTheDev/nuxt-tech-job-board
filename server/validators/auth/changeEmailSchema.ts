import * as yup from 'yup';

const changeEmailSchema = yup
  .object({
    updatedAt: yup.date().default(() => new Date()),
    newEmailAddress: yup
      .string()
      .email('Email address must be a valid email format.')
      .required('Please provide a new email address.'),
    password: yup.string().required('Password is required.'),
  })
  .unknown(false);

export type ChangeEmailSchemaType = yup.InferType<typeof changeEmailSchema>;

export default changeEmailSchema;
