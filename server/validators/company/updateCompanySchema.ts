import * as yup from 'yup';

const totalEmployeesOptions = [
  '<100',
  '100-500',
  '500-1000',
  '1000-5000',
  '5000-10000',
  '10000+',
];

const updateCompanySchema = yup
  .object({
    updatedAt: yup.date().default(() => new Date()),
    name: yup.string().required('A company name is required.').optional(),
    description: yup
      .string()
      .required('A company description is required.')
      .optional(),
    category: yup
      .string()
      .required('A company category is required.')
      .optional(),
    totalEmployees: yup.string().oneOf(totalEmployeesOptions).optional(),
    logo: yup
      .object()
      .shape({
        createdAt: yup.date().default(() => new Date()),
        url: yup.string().url().required('Company logo url is required.'),
        alt: yup.string().required().default('Company logo.'),
      })
      .unknown(false)
      .optional(),
    coverImage: yup
      .object()
      .shape({
        createdAt: yup.date().default(() => new Date()),
        url: yup.string().url().required(),
        alt: yup.string().required().default('Company cover image.'),
      })
      .optional()
      .unknown(false),
  })
  .unknown(false);

export type UpdateCompanySchemaTyoe = yup.InferType<typeof updateCompanySchema>;

export default updateCompanySchema;
