import * as yup from 'yup';

const closeAccountSchema = yup
  .object({
    password: yup.string().required('Password is required.'),
    close: yup
      .string()
      .test('match', 'You must type "CLOSE"', (value) => value === 'CLOSE')
      .required('Please type "CLOSE" to close the account.'),
  })
  .unknown(false);

export type CloseAccountSchemaType = yup.InferType<typeof closeAccountSchema>;

export default closeAccountSchema;
