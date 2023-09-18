// eslint-disable-next-line import/named
import { string, date, InferType, object } from 'yup';

const updateNotificationSchema = object({
  createdAt: date()
    .default(() => new Date())
    .notRequired(),
  jobPostId: string().required('A job post id is required.'),
  userId: string().required('A user id is required.'),
}).unknown(false);

export type UpdateNotificationSchemaType = InferType<
  typeof updateNotificationSchema
>;

export default updateNotificationSchema;
