import * as yup from 'yup';

const changeEmailSchema = yup
  .object({
    newEmailAddress: yup
      .string()
      .email('Email address must be a valid email format.')
      .notOneOf(
        [yup.ref('password')],
        'New password must not be the same as the current password.',
      )

      .required('Please provide a new email address.'),
    password: yup.string().required('Password is required.'),
  })
  .unknown(false);

export type ChangeEmailSchemaType = yup.InferType<typeof changeEmailSchema>;

export default changeEmailSchema;
