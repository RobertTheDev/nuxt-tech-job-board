import * as yup from 'yup';

const addTitleSchema = yup
  .object({
    updatedAt: yup.date().default(() => new Date()),
    title: yup.string().notRequired().required('Job title is required.'),
  })
  .unknown(false);

export type AddTitleSchemaType = yup.InferType<typeof addTitleSchema>;

export default addTitleSchema;
