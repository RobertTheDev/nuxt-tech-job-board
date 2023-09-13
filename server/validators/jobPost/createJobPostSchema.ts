import * as yup from 'yup';

const createJobPostSchema = yup
  .object({
    companyId: yup.string(),
    createdAt: yup.date().default(() => new Date()),
    totalApplicants: yup.number().default(0),
    published: yup.boolean().default(false),
    description: yup.string().notRequired().default(null),
    deadlineDate: yup
      .date()
      .min(new Date(), 'Deadline date cannot be in the past or current date.')
      .max(
        new Date(new Date().setMonth(new Date().getMonth() + 3)),
        'Deadline date cannot be more than 3 months in the future.',
      )
      .notRequired()
      .default(null),
    locationType: yup
      .string()

      .notRequired()
      .default(null)
      .oneOf(['on-premise', 'remote', 'hybrid'], 'Invalid location.'),

    location: yup
      .object()
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
    salary: yup
      .object()
      .shape({
        rate: yup.string().notRequired(),
        min: yup.number().min(0).notRequired(),
        max: yup.number().min(yup.ref('min')).notRequired(),
      })
      .notRequired()
      .default(null),

    seniorLevel: yup
      .string()
      .notRequired()
      .default(null)
      .oneOf(['junior', 'mid', 'senior'], 'Invalid level.'),
    contractType: yup
      .string()
      .notRequired()
      .default(null)
      .oneOf(['contract', 'full-time', 'part-time'], 'Invalid contract type.'),
    title: yup.string().notRequired().default(null),
  })
  .unknown(false);

export type CreateJobPostSchemaType = yup.InferType<typeof createJobPostSchema>;

export default createJobPostSchema;
