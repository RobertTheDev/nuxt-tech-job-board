import * as yup from 'yup';

const updateUserSchema = yup
  .object({
    updatedAt: yup.date().default(() => new Date()),
    firstName: yup.string().optional(),
    lastName: yup.string().optional(),
  })
  .unknown(false);

export type UpdateUserSchemaType = yup.InferType<typeof updateUserSchema>;

export default updateUserSchema;
