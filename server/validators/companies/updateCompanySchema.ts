import * as yup from 'yup';

const updateCompanySchema = yup
  .object({
    updatedAt: yup.date().default(() => new Date()),
    name: yup.string().optional(),
  })
  .unknown(false);

export type UpdateCompanySchemaType = yup.InferType<typeof updateCompanySchema>;

export default updateCompanySchema;
