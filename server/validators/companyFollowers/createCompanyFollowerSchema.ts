import * as yup from 'yup';

const createCompanyFollowerSchema = yup
  .object({
    createdAt: yup
      .date()
      .optional()
      .default(() => new Date()),
    companyId: yup.string().required('A company id is required.'),
    userId: yup.string().required('A user id is required.'),
  })
  .unknown(false);

export type CreateCompanyFollowerSchemaType = yup.InferType<
  typeof createCompanyFollowerSchema
>;

export default createCompanyFollowerSchema;
