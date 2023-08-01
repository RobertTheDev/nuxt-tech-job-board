import * as yup from 'yup';

const updateJobPostSchema = yup
  .object({
    updatedAt: yup.date().default(() => new Date()),
  })
  .unknown(false);

export type UpdateJobPostSchemaType = yup.InferType<typeof updateJobPostSchema>;

export default updateJobPostSchema;
