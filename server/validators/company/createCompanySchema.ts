import * as yup from 'yup';

const createCompanySchema = yup
  .object({
    createdAt: yup.date().default(() => new Date()),
    name: yup.string().required('A company name is required.'),
    description: yup.string().required('A company description is required.'),
    category: yup.string().required('A company category is required.'),
    totalEmployees: yup
      .string()
      .oneOf([
        '<100',
        '100-500',
        '500-1000',
        '1000-5000',
        '5000-10000',
        '10000+',
      ])
      .required(),
    logo: yup
      .object()
      .shape({
        createdAt: yup.date().default(() => new Date()),
        url: yup.string().url().required('Company logo url is required.'),
        alt: yup.string().required().default('Company logo.'),
      })
      .required('A company logo is required.'),
    coverImage: yup
      .object()
      .shape({
        createdAt: yup.date().default(() => new Date()),
        url: yup.string().url().required(), // Make url optional
        alt: yup.string().required().default('Company cover image.'),
      })
      .nullable()
      .default(null),
  })
  .unknown(false);

export type CreateCompanySchemaType = yup.InferType<typeof createCompanySchema>;

export default createCompanySchema;
