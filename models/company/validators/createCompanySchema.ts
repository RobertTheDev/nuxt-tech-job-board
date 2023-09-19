import { date, string, object } from 'yup';

const totalEmployeesOptions = [
  '<100',
  '100-500',
  '500-1000',
  '1000-5000',
  '5000-10000',
  '10000+',
];

const createCompanySchema = object({
  createdAt: date().default(() => new Date()),
  name: string().required('A company name is required.'),
  description: string().required('A company description is required.'),
  category: string().required('A company category is required.'),
  totalEmployees: string().oneOf(totalEmployeesOptions).required(),
  logo: object()
    .shape({
      createdAt: date().default(() => new Date()),
      url: string().url().required('Company logo url is required.'),
      alt: string().required().default('Company logo.'),
    })
    .unknown(false)
    .required('A company logo is required.'),
  coverImage: object()
    .shape({
      createdAt: date().default(() => new Date()),
      url: string().url().required(),
      alt: string().required().default('Company cover image.'),
    })
    .nullable()
    .unknown(false)
    .default(null),
}).unknown(false);

export default createCompanySchema;
