import * as yup from 'yup';

const updateCompanyOwnerSchema = yup
  .object({
    updatedAt: yup.date().default(() => new Date()),
    companyId: yup.string().optional(),
    userId: yup.string().optional(),
  })
  .unknown(false);

export type UpdateCompanyOwnerSchemaType = yup.InferType<
  typeof updateCompanyOwnerSchema
>;

export default updateCompanyOwnerSchema;
