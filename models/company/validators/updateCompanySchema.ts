import { date, string, object } from 'yup';

const totalEmployeesOptions = [
  '<100',
  '100-500',
  '500-1000',
  '1000-5000',
  '5000-10000',
  '10000+',
];

const updateCompanySchema = object({
  updatedAt: date().default(() => new Date()),
  name: string().required('A company name is required.').optional(),
  description: string()
    .required('A company description is required.')
    .optional(),
  category: string().required('A company category is required.').optional(),
  totalEmployees: string().oneOf(totalEmployeesOptions).optional(),
  logo: object()
    .shape({
      createdAt: date().default(() => new Date()),
      url: string().url().required('Company logo url is required.'),
      alt: string().required().default('Company logo.'),
    })
    .unknown(false)
    .optional(),
  coverImage: object()
    .shape({
      createdAt: date().default(() => new Date()),
      url: string().url().required(),
      alt: string().required().default('Company cover image.'),
    })
    .optional()
    .unknown(false),
}).unknown(false);

export default updateCompanySchema;
