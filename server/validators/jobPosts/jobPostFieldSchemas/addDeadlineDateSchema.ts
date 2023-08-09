import * as yup from 'yup';

const addDeadlineDateSchema = yup
  .object({
    updatedAt: yup.date().default(() => new Date()),
    deadlineDate: yup.date().required('Job deadline date is required.'),
  })
  .unknown(false);

export type AddDeadlineDateSchemaType = yup.InferType<
  typeof addDeadlineDateSchema
>;

export default addDeadlineDateSchema;
