import { date, object, string } from 'yup';

const createJobApplicationSchema = object({
  createdAt: date().default(() => new Date()),
  userId: string().required('A user id is required.'),
  jobPostId: string().required('A company id is required.'),
}).unknown(false);

export default createJobApplicationSchema;
