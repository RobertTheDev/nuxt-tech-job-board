import * as yup from 'yup';

const updateApplicationSchema = yup
  .object({
    updatedAt: yup.date().default(() => new Date()),
    userId: yup.string().optional(),
    jobPostId: yup.string().optional(),
  })
  .unknown(false);

export type UpdateApplicationSchemaType = yup.InferType<
  typeof updateApplicationSchema
>;

export default updateApplicationSchema;
