import * as yup from 'yup';

const addDescriptionSchema = yup
  .object({
    updatedAt: yup.date().default(() => new Date()),
    description: yup.string().required('Job description is required.'),
  })
  .unknown(false);

export type AddDescriptionSchemaType = yup.InferType<
  typeof addDescriptionSchema
>;

export default addDescriptionSchema;
