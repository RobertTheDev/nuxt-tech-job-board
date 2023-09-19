import { date, string, object } from 'yup';

const addTitleSchema = object({
  updatedAt: date().default(() => new Date()),
  title: string().notRequired().required('Job title is required.'),
}).unknown(false);

export default addTitleSchema;
