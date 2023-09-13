import * as yup from 'yup';

const createSavedJobPostSchema = yup
  .object({
    createdAt: yup
      .date()
      .default(() => new Date())
      .notRequired(),
    jobPostId: yup.string().required('A job post id is required.'),
    userId: yup.string().required('A user id is required.'),
  })
  .unknown(false);

export type CreateSavedJobPostSchemaType = yup.InferType<
  typeof createSavedJobPostSchema
>;

export default createSavedJobPostSchema;
