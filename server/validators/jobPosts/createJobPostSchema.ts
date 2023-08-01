import * as yup from 'yup';

const createJobPostSchema = yup
  .object({
    createdAt: yup.date().default(() => new Date()),
    title: yup.string().required('A job title is required for a job post.'),
    companyId: yup
      .string()
      .required('A company id is required for a job post.'),
  })
  .unknown(false);

export type CreateJobPostSchemaType = yup.InferType<typeof createJobPostSchema>;

export default createJobPostSchema;
