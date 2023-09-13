import * as yup from 'yup';

const createCompanyOwnerSchema = yup
  .object({
    createdAt: yup.date().default(() => new Date()),
    companyId: yup.string().required('A company id is required.'),
    userId: yup.string().required('A user id is required.'),
  })
  .unknown(false);

export type CreateCompanyOwnerSchemaType = yup.InferType<
  typeof createCompanyOwnerSchema
>;

export default createCompanyOwnerSchema;
