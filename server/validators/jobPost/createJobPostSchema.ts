import { object, date, string, number, boolean } from 'yup';

const createJobPostSchema = object({
  companyId: string(),
  createdAt: date().default(() => new Date()),
  totalApplicants: number().default(0),
  published: boolean().default(false),
  description: string().notRequired().default(null),
  deadlineDate: date()
    .min(new Date(), 'Deadline date cannot be in the past or current date.')
    .max(
      new Date(new Date().setMonth(new Date().getMonth() + 3)),
      'Deadline date cannot be more than 3 months in the future.',
    )
    .notRequired()
    .default(null),
  locationType: string()
    .notRequired()
    .default(null)
    .oneOf(['on-premise', 'remote', 'hybrid'], 'Invalid location.'),

  location: object()
    .shape({
      fullName: yup.string().required('Full name is required'),
      streetAddress: yup.string().required('Street address is required'),
      city: yup.string().required('City is required'),
      state: yup.string().required('State is required'),
      postalCode: yup.string().required('Postal code is required'),
      country: yup.string().required('Country is required'),
    })
    .notRequired()
    .default(null),
  salary: object()
    .shape({
      rate: yup.string().notRequired(),
      min: yup.number().min(0).notRequired(),
      max: yup.number().min(yup.ref('min')).notRequired(),
    })
    .notRequired()
    .default(null),

  seniorLevel: string()
    .notRequired()
    .default(null)
    .oneOf(['junior', 'mid', 'senior'], 'Invalid level.'),
  contractType: string()
    .notRequired()
    .default(null)
    .oneOf(['contract', 'full-time', 'part-time'], 'Invalid contract type.'),
  title: string().notRequired().default(null),
}).unknown(false);

export default createJobPostSchema;
