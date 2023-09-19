import { date, object } from 'yup';

const updateJobInterviewSchema = object({
  updatedAt: date().default(() => new Date()),
}).unknown(false);

export default updateJobInterviewSchema;
