import * as yup from 'yup';

const createCompanySchema = yup
  .object({
    createdAt: yup.date().default(() => new Date()),
    name: yup.string().required('A company name is required.'),
  })
  .unknown(false);

export type CreateCompanySchemaType = yup.InferType<typeof createCompanySchema>;

export default createCompanySchema;
