import * as yup from 'yup';

const createJobInterviewSchema = yup
  .object({
    createdAt: yup.date().default(() => new Date()),
  })
  .unknown(false);

export type CreateJobInterviewSchemaType = yup.InferType<
  typeof createJobInterviewSchema
>;

export default createJobInterviewSchema;
