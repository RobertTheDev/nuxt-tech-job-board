import * as yup from 'yup';

const updateCompanyFollowerSchema = yup
  .object({
    updatedAt: yup.date().default(() => new Date()),
    companyId: yup.string().optional(),
    userId: yup.string().optional(),
  })
  .unknown(false);

export type UpdateCompanyFollowerSchemaType = yup.InferType<
  typeof updateCompanyFollowerSchema
>;

export default updateCompanyFollowerSchema;
