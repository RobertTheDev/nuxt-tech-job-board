import { object, date, string } from 'yup';

const updateJobApplicationSchema = object({
  updatedAt: date().default(() => new Date()),
  userId: string().optional(),
  jobPostId: string().optional(),
}).unknown(false);

export default updateJobApplicationSchema;
