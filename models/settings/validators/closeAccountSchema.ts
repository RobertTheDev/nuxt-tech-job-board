import { string, object } from 'yup';

const closeAccountSchema = object({
  password: string().required('Password is required.'),
  close: string()
    .test('match', 'You must type "CLOSE"', (value) => value === 'CLOSE')
    .required('Please type "CLOSE" to close the account.'),
}).unknown(false);

export default closeAccountSchema;
