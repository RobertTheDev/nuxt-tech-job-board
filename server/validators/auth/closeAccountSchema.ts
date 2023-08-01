import * as yup from 'yup';

const closeAccountSchema = yup
  .object({
    password: yup.string().required('Password is required.'),
  })
  .unknown(false);

export type CloseAccountSchemaType = yup.InferType<typeof closeAccountSchema>;

export default closeAccountSchema;
