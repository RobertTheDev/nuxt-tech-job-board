import * as yup from 'yup';

const createJobPostSchema = yup
  .object({
    companyId: yup
      .string()
      .required('A company id is required for a job post.'),
    createdAt: yup.date().default(() => new Date()),
    published: yup.boolean().default(false),
  })
  .unknown(false);

export type CreateJobPostSchemaType = yup.InferType<typeof createJobPostSchema>;

export default createJobPostSchema;
