import { date, object, string } from 'yup';

const createJobApplicationSchema = object({
  createdAt: date().default(() => new Date()),
  cv: string().required('Your cv is required.'),
  message: string().nullable().optional(),
}).unknown(false);

export default createJobApplicationSchema;
