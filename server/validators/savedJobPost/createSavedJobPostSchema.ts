import { date, string, object } from 'yup';

const createSavedJobPostSchema = object({
  createdAt: date()
    .default(() => new Date())
    .notRequired(),
  jobPostId: string().required('A job post id is required.'),
  userId: string().required('A user id is required.'),
}).unknown(false);

export default createSavedJobPostSchema;
