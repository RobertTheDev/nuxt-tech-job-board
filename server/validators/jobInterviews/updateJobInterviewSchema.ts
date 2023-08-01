import * as yup from 'yup';

const updateJobInterviewSchema = yup
  .object({
    updatedAt: yup.date().default(() => new Date()),
  })
  .unknown(false);

export type UpdateJobInterviewSchemaType = yup.InferType<
  typeof updateJobInterviewSchema
>;

export default updateJobInterviewSchema;
