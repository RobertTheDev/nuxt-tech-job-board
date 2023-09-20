import { date, object, string } from 'yup';

const updateJobApplicationSchema = object({
  updatedAt: date().default(() => new Date()),
  cv: string().optional(),
  message: string().optional(),
}).unknown(false);

export default updateJobApplicationSchema;
