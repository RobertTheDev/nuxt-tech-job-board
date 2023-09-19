import { string, date, object } from 'yup';

const updateNotificationSchema = object({
  createdAt: date()
    .default(() => new Date())
    .notRequired(),
  jobPostId: string().required('A job post id is required.'),
  userId: string().required('A user id is required.'),
}).unknown(false);

export default updateNotificationSchema;
