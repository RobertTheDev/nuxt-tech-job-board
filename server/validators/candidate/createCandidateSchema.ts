import * as yup from 'yup';

const createCandidateSchema = yup
  .object({
    createdAt: yup.date().default(() => new Date()),
    userId: yup.string().required('A user id is required.'),
    jobPostId: yup.string().required('A company id is required.'),
  })
  .unknown(false);

export type CreateCandidateSchemaType = yup.InferType<
  typeof createCandidateSchema
>;

export default createCandidateSchema;
