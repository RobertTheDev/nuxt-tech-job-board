import * as yup from 'yup';

const updateJobApplicationSchema = yup
  .object({
    updatedAt: yup.date().default(() => new Date()),
    userId: yup.string().optional(),
    jobPostId: yup.string().optional(),
  })
  .unknown(false);

export type UpdateJobApplicationSchemaType = yup.InferType<
  typeof updateJobApplicationSchema
>;

export default updateJobApplicationSchema;
