import * as yup from 'yup';

const createJobApplicationSchema = yup
  .object({
    createdAt: yup.date().default(() => new Date()),
    userId: yup.string().required('A user id is required.'),
    jobPostId: yup.string().required('A company id is required.'),
  })
  .unknown(false);

export type CreateJobApplicationSchemaType = yup.InferType<
  typeof createJobApplicationSchema
>;

export default createJobApplicationSchema;
