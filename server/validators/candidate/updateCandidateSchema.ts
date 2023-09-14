import * as yup from 'yup';

const updateCandidateSchema = yup
  .object({
    updatedAt: yup.date().default(() => new Date()),
    userId: yup.string().optional(),
    jobPostId: yup.string().optional(),
  })
  .unknown(false);

export type UpdateCandidateSchemaType = yup.InferType<
  typeof updateCandidateSchema
>;

export default updateCandidateSchema;
