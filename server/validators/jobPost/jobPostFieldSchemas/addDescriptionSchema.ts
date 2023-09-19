import { string, date, object } from 'yup';

const addDescriptionSchema = object({
  updatedAt: date().default(() => new Date()),
  description: string().required('Job description is required.'),
}).unknown(false);

export default addDescriptionSchema;
